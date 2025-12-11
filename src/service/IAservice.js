// FRONTEND - envia mensagem para o backend

import api from "./api"; // usa o axios configurado com o IP da sua máquina

export async function enviarMensagemParaIA(mensagem) {
  try {
    const resposta = await api.post("/duelo/enviar", {
      mensagem: mensagem,
    });

    return resposta.data.resposta;

  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    return "Erro ao conectar com a IA.";
  }
}
