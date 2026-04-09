import React from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { useQuizDiario } from "../../hooks/useQuizDiario";
import {
  Container,
  Header,
  BackButton,
  BackText,
  Title,
  SubjectBadge,
  SubjectText,
  QuestionCard,
  QuestionText,
  OptionButton,
  OptionText,
  StatusBox,
  StatusText,
  PointsText,
  ActionButton,
  ActionButtonText,
} from "./styles";

export default function QuizDiario({ navigation }) {
  const {
    quiz,
    perguntaAtual,
    perguntaIndex,
    totalPerguntas,
    respostas,
    carregando,
    jaJogouHoje,
    finalizado,
    xpGanho,
    acertos,
    responder,
    getOptionColor,
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
      ) : jaJogouHoje && !finalizado ? (
        // Já jogou hoje — sem quiz ativo
        <StatusBox>
          <StatusText>
            Você já respondeu o quiz de hoje. Volte amanhã!
          </StatusText>
        </StatusBox>
      ) : finalizado ? (
        // Tela de resultado final
        <>
          <SubjectBadge>
            <SubjectText>{quiz?.materia}</SubjectText>
          </SubjectBadge>
          <QuestionCard>
            <QuestionText style={{ textAlign: "center", fontSize: 22 }}>
              Quiz concluído!
            </QuestionText>
            <QuestionText style={{ textAlign: "center", marginTop: 12 }}>
              {acertos} de {totalPerguntas} acertos
            </QuestionText>
          </QuestionCard>
          <StatusBox>
            {xpGanho > 0 ? (
              <PointsText>+{xpGanho} XP ganhos!</PointsText>
            ) : (
              <StatusText>Nenhum XP desta vez. Tente amanhã!</StatusText>
            )}
            <StatusText style={{ marginTop: 8 }}>
              Disponível novamente amanhã.
            </StatusText>
          </StatusBox>
          <ActionButton onPress={() => navigation.navigate("Menu")}>
            <ActionButtonText>Voltar ao Menu</ActionButtonText>
          </ActionButton>
        </>
      ) : (
        // Quiz em andamento
        <>
          <SubjectBadge>
            <SubjectText>{quiz?.materia}</SubjectText>
          </SubjectBadge>

          {/* Progresso */}
          <View style={{ alignItems: "center", marginBottom: 8 }}>
            <Text style={{ color: "#A086CC", fontSize: 14 }}>
              Pergunta {perguntaIndex + 1} de {totalPerguntas}
            </Text>
          </View>

          <QuestionCard>
            <QuestionText>{perguntaAtual?.pergunta}</QuestionText>
          </QuestionCard>

          {perguntaAtual?.alternativas.map((alt, index) => (
            <OptionButton
              key={index}
              background={getOptionColor(index)}
              onPress={() => responder(index)}
              disabled={respostas[perguntaIndex] !== undefined}
            >
              <OptionText>{`${String.fromCharCode(65 + index)}. ${alt}`}</OptionText>
            </OptionButton>
          ))}

          <StatusBox>
            {respostas[perguntaIndex] !== undefined ? (
              <StatusText>
                {respostas[perguntaIndex] === perguntaAtual?.correta
                  ? "✅ Correto!"
                  : "❌ Incorreto."}
                {perguntaIndex < totalPerguntas - 1
                  ? " Próxima pergunta em instantes..."
                  : ""}
              </StatusText>
            ) : (
              <StatusText>Escolha uma alternativa.</StatusText>
            )}
          </StatusBox>
        </>
      )}
    </Container>
  );
}
