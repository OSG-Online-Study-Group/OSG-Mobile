import React from "react";
import { ActivityIndicator } from "react-native";
import { useQuizDiario } from "../../hooks/useQuizDiario";
import {
  Container, Header, BackButton, BackText, Title,
  SubjectBadge, SubjectText, QuestionCard, QuestionText,
  OptionButton, OptionText, StatusBox, StatusText,
  PointsText, ActionButton, ActionButtonText,
} from "./styles";

export default function QuizDiario({ navigation }) {
  const {
    quiz, carregando, jaJogouHoje,
    selectedIndex, xpGanho, status,
    responder, getOptionColor, novaPergunta,
  } = useQuizDiario();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
        <Title>Quiz Diário</Title>
        <BackButton onPress={() => navigation.navigate("Game")}>
          <BackText>Menu</BackText>
        </BackButton>
      </Header>

      {carregando ? (
        <ActivityIndicator color="#B84EF2" style={{ flex: 1 }} />
      ) : (
        <>
          <SubjectBadge>
            <SubjectText>{quiz.materia}</SubjectText>
          </SubjectBadge>

          <QuestionCard>
            <QuestionText>{quiz.pergunta}</QuestionText>
          </QuestionCard>

          {quiz.alternativas.map((alt, index) => (
            <OptionButton
              key={index}
              background={getOptionColor(index)}
              onPress={() => responder(index)}
              disabled={selectedIndex !== null || jaJogouHoje}
            >
              <OptionText>{`${String.fromCharCode(65 + index)}. ${alt}`}</OptionText>
            </OptionButton>
          ))}

          <StatusBox>
            <StatusText>{status || "Escolha uma alternativa."}</StatusText>
            {xpGanho > 0 && <PointsText>+{xpGanho} XP</PointsText>}
          </StatusBox>

          <ActionButton onPress={jaJogouHoje ? null : novaPergunta} disabled={jaJogouHoje}>
            <ActionButtonText>
              {jaJogouHoje ? "Disponível amanhã" : "Nova pergunta"}
            </ActionButtonText>
          </ActionButton>
        </>
      )}
    </Container>
  );
}