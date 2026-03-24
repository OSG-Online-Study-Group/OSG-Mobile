import React from "react";
import {
  Container,
  QuestionBox,
  QuestionText,
  OptionButton,
  OptionText,
  ProgressText,
} from "./styles";

import { useTreino } from "../../hooks/useTreino";

export default function TreinoExatas() {
  const {
    quiz,
    selected,
    respostaCorreta,
    perguntaAtual,
    finalizado,
    responder,
  } = useTreino("exatas");

  if (!quiz) return null;

  if (finalizado) {
    return (
      <Container>
        <QuestionText>Treino finalizado!</QuestionText>
      </Container>
    );
  }

  const getColor = (index) => {
    if (selected === null) return "#4c2d6f";

    if (index === respostaCorreta) return "#2f9e44";
    if (index === selected) return "#c92a2a";

    return "#4c2d6f";
  };

  return (
    <Container>

      <ProgressText>
        Pergunta {perguntaAtual} / 7
      </ProgressText>

      <QuestionBox>
        <QuestionText>{quiz.pergunta}</QuestionText>
      </QuestionBox>

      {quiz.alternativas.map((alt, i) => (
        <OptionButton
          key={i}
          onPress={() => responder(i)}
          style={{ backgroundColor: getColor(i) }}
        >
          <OptionText>
            {String.fromCharCode(65 + i)}. {alt}
          </OptionText>
        </OptionButton>
      ))}
    </Container>
  );
}