import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { enviarMensagemParaIA } from "../services/openrouter";
import { atualizarXP } from "../services/firestore";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const DAILY_XP = 20;

const MATERIAS = [
  "Matemática", "Física", "Química", "Biologia",
  "História", "Geografia", "Filosofia", "Sociologia",
  "Português", "Literatura",
];

const MATERIA_TO_GROUP = {
  "Matemática": "group_matematica",
  "Física": "group_ciencias_natureza",
  "Química": "group_ciencias_natureza",
  "Biologia": "group_ciencias_natureza",
  "História": "group_ciencias_humanas",
  "Geografia": "group_ciencias_humanas",
  "Filosofia": "group_ciencias_humanas",
  "Sociologia": "group_ciencias_humanas",
  "Português": "group_linguagens",
  "Literatura": "group_linguagens",
};

const FALLBACK = {
  materia: "Matemática",
  pergunta: "Quanto é 7 × 8?",
  alternativas: ["54", "56", "58", "64"],
  correta: 1,
};

function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

function parseQuiz(raw) {
  try {
    const match = raw?.match(/\{[\s\S]*\}/);
    if (!match) return FALLBACK;
    const parsed = JSON.parse(match[0]);
    const valido =
      parsed.pergunta &&
      Array.isArray(parsed.alternativas) &&
      parsed.alternativas.length === 4 &&
      Number.isInteger(parsed.correta) &&
      parsed.correta >= 0 &&
      parsed.correta <= 3;
    return valido ? {
      materia: parsed.materia || "Geral",
      pergunta: String(parsed.pergunta),
      alternativas: parsed.alternativas.map(String),
      correta: parsed.correta,
    } : FALLBACK;
  } catch {
    return FALLBACK;
  }
}

export function useQuizDiario() {
  const { firebaseUser, refreshUsuario } = useAuth();
  const [quiz, setQuiz] = useState(FALLBACK);
  const [carregando, setCarregando] = useState(true);
  const [respondido, setRespondido] = useState(false);
  const [jaJogouHoje, setJaJogouHoje] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [xpGanho, setXpGanho] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    inicializar();
  }, []);

  async function inicializar() {
    setCarregando(true);
    if (firebaseUser) {
      const snap = await getDoc(doc(db, "users", firebaseUser.uid));
      if (snap.exists() && snap.data().lastDailyQuizDate === getTodayKey()) {
        setJaJogouHoje(true);
        setStatus("Você já respondeu o quiz de hoje. Volte amanhã!");
        setCarregando(false);
        return;
      }
    }
    await gerarPergunta();
    setCarregando(false);
  }

  async function gerarPergunta() {
    const materia = MATERIAS[Math.floor(Math.random() * MATERIAS.length)];
    const prompt = `
      Gere uma pergunta de múltipla escolha de nível ensino médio sobre ${materia}.
      Retorne SOMENTE um JSON válido no formato:
      {
        "materia": "${materia}",
        "pergunta": "texto da pergunta",
        "alternativas": ["opcao A", "opcao B", "opcao C", "opcao D"],
        "correta": 0
      }
      Regras:
      - Exatamente 4 alternativas.
      - Apenas uma correta.
      - "correta" é índice de 0 a 3.
      - Sem markdown.
    `;
    try {
      const resposta = await enviarMensagemParaIA(prompt);
      setQuiz(parseQuiz(resposta));
      setSelectedIndex(null);
      setXpGanho(0);
      setStatus("");
      setRespondido(false);
    } catch {
      setQuiz(FALLBACK);
    }
  }

  async function responder(index) {
    if (respondido || jaJogouHoje) return;

    setSelectedIndex(index);
    setRespondido(true);

    const acertou = index === quiz.correta;
    const xp = acertou ? DAILY_XP : 0;
    setXpGanho(xp);
    setStatus(acertou ? "✅ Resposta correta!" : "❌ Resposta incorreta.");

    if (!firebaseUser) return;

    try {
      const groupId = MATERIA_TO_GROUP[quiz.materia] || null;

      // Salva XP e marca quiz como feito hoje
      if (acertou) {
        await atualizarXP(firebaseUser.uid, xp, groupId);
        refreshUsuario({ xp: xp }); // atualiza contexto local
      }

      await updateDoc(doc(db, "users", firebaseUser.uid), {
        lastDailyQuizDate: getTodayKey(),
      });

      setJaJogouHoje(true);
    } catch (error) {
      console.error("Erro ao salvar quiz diário:", error);
    }
  }

  function getOptionColor(index) {
    if (selectedIndex === null) return "#4c2d6f";
    if (index === quiz.correta) return "#2f9e44";
    if (index === selectedIndex) return "#c92a2a";
    return "#4c2d6f";
  }

  return {
    quiz,
    carregando,
    jaJogouHoje,
    selectedIndex,
    xpGanho,
    status,
    responder,
    getOptionColor,
    novaPergunta: gerarPergunta,
  };
}