import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { enviarMensagemParaIA } from "../services/openrouter";
import { atualizarXP } from "../services/firestore";

const XP_POR_ACERTO = 10;

const CATEGORIAS = {
  matematica: {
    label: "Matemática",
    materias: "Matemática (Álgebra, Geometria ou Trigonometria)",
    contexto: "contexto matemático",
  },
  ciencias_natureza: {
    label: "Ciências da Natureza",
    materias: "Física, Química ou Biologia",
    contexto: "contexto científico",
  },
  ciencias_humanas: {
    label: "Ciências Humanas",
    materias: "História, Geografia, Filosofia ou Sociologia",
    contexto: "contexto histórico/social",
  },
  linguagens: {
    label: "Linguagens",
    materias: "Português, Literatura ou Inglês",
    contexto: "contexto linguístico e literário",
  },
  informatica: {
    label: "Informática",
    materias: "Lógica, Programação ou Redes",
    contexto: "contexto de tecnologia e computação",
  },
};

export function useTreino(categoria) {
  const { firebaseUser, usuario, refreshUsuario } = useAuth();
  const config = CATEGORIAS[categoria] || CATEGORIAS.ciencias_humanas;
  const groupId = `group_${categoria}`;

  const [messages, setMessages] = useState([]);
  const [perguntaAtual, setPerguntaAtual] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [xpTotal, setXpTotal] = useState(0);

  useEffect(() => {
    gerarPergunta();
  }, []);

  async function gerarPergunta() {
    setCarregando(true);
    try {
      const prompt = `
        Gere uma pergunta de ${config.materias}.
        A pergunta deve exigir resposta curta ou explicação breve.
        Não forneça a resposta.
        Retorne apenas a pergunta.
      `;
      const resposta = await enviarMensagemParaIA(prompt);
      setPerguntaAtual(resposta);
      setMessages([{ id: Date.now(), sender: "bot", text: resposta }]);
    } catch (error) {
      console.error("Erro ao gerar pergunta:", error);
    } finally {
      setCarregando(false);
    }
  }

  async function handleSend() {
    if (!newMessage.trim()) return;

    const userAnswer = newMessage;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "you", text: userAnswer },
    ]);
    setNewMessage("");

    try {
      const promptCorrecao = `
        Pergunta: ${perguntaAtual}
        Resposta do aluno: ${userAnswer}

        Avalie a resposta considerando ${config.contexto}.
        Responda apenas:

        CORRETA ou INCORRETA

        Depois explique brevemente o motivo.
      `;

      const respostaIA = await enviarMensagemParaIA(promptCorrecao);
      const acertou = respostaIA.toUpperCase().includes("CORRETA");

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: respostaIA },
      ]);

      if (acertou && firebaseUser) {
        await atualizarXP(firebaseUser.uid, XP_POR_ACERTO, groupId);
        setXpTotal((prev) => prev + XP_POR_ACERTO);
        refreshUsuario({ xp: (usuario?.xp || 0) + XP_POR_ACERTO });
      }

      setTimeout(() => gerarPergunta(), 3000);

    } catch {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 2, sender: "bot", text: "Erro ao corrigir resposta." },
      ]);
    }
  }

  return {
    messages,
    newMessage,
    setNewMessage,
    handleSend,
    carregando,
    xpTotal,
    config,
  };
}