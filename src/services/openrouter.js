const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_API_KEY = process.env.EXPO_PUBLIC_OPENROUTER_API_KEY;

export async function enviarMensagemParaIA(mensagem) {
  try {
    const response = await fetch(OPENROUTER_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct:free",
        messages: [{ role: "user", content: mensagem }],
      }),
    });

    const data = await response.json();

    if (!data.choices || data.choices.length === 0) {
      return "Erro: resposta vazia da IA.";
    }

    return data.choices[0].message.content;

  } catch (error) {
    console.error("Erro ao chamar OpenRouter:", error);
    return "Erro ao conectar com a IA.";
  }
}