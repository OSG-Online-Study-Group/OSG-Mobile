import { useState, useEffect } from "react";
import { enviarMensagemParaIA } from "../services/openrouter";
import { atualizarXPPorCategoria } from "../services/firestore";
import { useAuth } from "../context/AuthContext";

export function useTreino(tipo) {
  const [quiz, setQuiz] = useState(null);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [contador, setContador] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const { user } = useAuth();

  const MAX_PERGUNTAS = 7;
  const XP_POR_ACERTO = 5;

  const categorias = {
    exatas: "exatas",
    humanas: "humanas",
    natureza: "natureza",
    extras: "ti"
  };

  useEffect(() => {
    gerarPergunta();
  }, []);

  const gerarPrompt = () => {
    const temas = {
      exatas: "Matematica",
      humanas: "Historia, Geografia, Sociologia ou Portugues",
      natureza: "Fisica, Quimica ou Biologia",
      extras: "Computacao"
    };

    return `
Gere uma pergunta de multipla escolha sobre ${temas[tipo]}.

FORMATO JSON:
{
  "pergunta": "texto",
  "alternativas": ["A", "B", "C", "D"],
  "correta": 0
}

REGRAS:
- Nivel facil ou medio
- 4 alternativas
- Apenas 1 correta
- correta de 0 a 3
- Sem explicacao
`;
  };

  const gerarPergunta = async () => {
    if (contador >= MAX_PERGUNTAS) {
      setFinalizado(true);
      return;
    }

    try {
      setLoading(true);

      const resposta = await enviarMensagemParaIA(gerarPrompt());

      let parsed;

      try {
        parsed = JSON.parse(resposta);
      } catch {
        parsed = {
          pergunta: "Quanto é 2 + 2?",
          alternativas: ["2", "3", "4", "5"],
          correta: 2
        };
      }

      setQuiz(parsed);
      setSelected(null);

    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const responder = async (index) => {
    if (selected !== null || finalizado) return;

    setSelected(index);

    const acertou = index === quiz.correta;

    if (acertou && user) {
      await atualizarXPPorCategoria(
        user.uid,
        categorias[tipo],
        XP_POR_ACERTO
      );
    }

    setTimeout(() => {
      setContador((prev) => prev + 1);
      gerarPergunta();
    }, 1500);
  };

  return {
    quiz,
    responder,
    selected,
    loading,
    contador,
    finalizado
  };
}