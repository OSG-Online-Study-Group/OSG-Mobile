import { useState, useEffect } from "react";
import { enviarMensagemParaIA } from "../services/openrouter";
import { atualizarXP } from "../services/firestore";
import { useAuth } from "../context/AuthContext";

export function useTreino(tipo) {
  const [messages, setMessages] = useState([]);
  const [perguntaAtual, setPerguntaAtual] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    gerarPergunta();
  }, []);

  const gerarPromptPergunta = () => {
    const temas = {
      exatas: "EXATAS (matemática, física ou química)",
      humanas: "HUMANAS (história, geografia, filosofia ou sociologia)",
      extras: "COMPUTAÇÃO (programação, redes, banco de dados, IA)"
    };

    return `
Gere uma pergunta aberta de ${temas[tipo]}.

Retorne em JSON:
{
  "pergunta": "string"
}

REGRAS:
- Português correto
- Não juntar palavras
- Sem resposta
- Sem explicação
`;
  };

  const gerarPergunta = async () => {
    try {
      setLoading(true);

      const resposta = await enviarMensagemParaIA(gerarPromptPergunta());

      let pergunta = "";

      try {
        const json = JSON.parse(resposta);
        pergunta = json.pergunta;
      } catch {
        pergunta = resposta;
      }

      setPerguntaAtual(pergunta);

      setMessages([
        {
          id: Date.now(),
          sender: "bot",
          text: pergunta,
        },
      ]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const responder = async (userAnswer) => {
    const userMessage = {
      id: Date.now(),
      sender: "you",
      text: userAnswer,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const prompt = `
Pergunta: ${perguntaAtual}
Resposta do aluno: ${userAnswer}

Responda em JSON:

{
  "resultado": "CORRETA ou INCORRETA",
  "explicacao": "explicação curta"
}

REGRAS:
- Português correto
- Não juntar palavras
- Sem texto fora do JSON
`;

      const respostaIA = await enviarMensagemParaIA(prompt);

      let resultado = "INCORRETA";
      let explicacao = "Erro ao corrigir.";

      try {
        const json = JSON.parse(respostaIA);
        resultado = json.resultado;
        explicacao = json.explicacao;
      } catch {
        explicacao = respostaIA;
      }


      if (resultado === "CORRETA") {
        await atualizarXP(user.uid, 5);
      }

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: `${resultado}\n${explicacao}`,
      };

      setMessages((prev) => [...prev, botMessage]);

      setTimeout(() => {
        gerarPergunta();
      }, 3000);

    } catch (e) {
      console.log(e);
    }
  };

  return {
    messages,
    responder,
    loading
  };
}