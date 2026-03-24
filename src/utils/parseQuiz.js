export function parseQuizResponse(rawText) {
  if (!rawText || typeof rawText !== "string") {
    return null;
  }


  const jsonMatch = rawText.match(/\{[\s\S]*\}/);

  if (!jsonMatch) return null;

  try {
    const parsed = JSON.parse(jsonMatch[0]);


    if (
      !parsed.pergunta ||
      !Array.isArray(parsed.alternativas) ||
      parsed.alternativas.length !== 4 ||
      typeof parsed.correta !== "number"
    ) {
      return null;
    }

    return parsed;
  } catch (error) {
    return null;
  }
}