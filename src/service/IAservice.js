// src/service/IAservice.js
import api from "./api"; // importa o axios configurado

export async function enviarMensagemParaIA(mensagem) {
  try {
    const resposta = await api.post("/duelo/enviar", { // rota definida no backend
      mensagem: mensagem,
    });

    return resposta.data.resposta;

  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    return "Erro ao conectar com a IA.";
  }
}
