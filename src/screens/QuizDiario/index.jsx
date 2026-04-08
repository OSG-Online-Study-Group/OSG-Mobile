import React, { useEffect } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { useQuizDiario } from "../../hooks/useQuizDiario";
import {
  Container, Header, BackButton, BackText, Title,
  SubjectBadge, SubjectText, QuestionCard, QuestionText,
  OptionButton, OptionText, StatusBox, StatusText,
  PointsText
} from "./styles";

export default function QuizDiario({ navigation }) {
  const {
    quiz, perguntaAtual, perguntaIndex, totalPerguntas,
    respostas, carregando, jaJogouHoje, finalizado,
    xpGanho, acertos, responder, getOptionColor,
  } = useQuizDiario();

  // 🔥 redirecionamento automático após finalizar
  useEffect(() => {
    if (finalizado) {
      const timer = setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Game" }],
        });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [finalizado]);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>

        <Title>Quiz Diário</Title>

        {/* botão da direita removido */}
      </Header>

      {carregando ? (
        <ActivityIndicator color="#B84EF2" style={{ flex: 1 }} />
      ) : jaJogouHoje && !finalizado ? (
        <StatusBox>
          <StatusText>Você já respondeu o quiz de hoje. Volte amanhã!</StatusText>
        </StatusBox>
      ) : finalizado ? (
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
            {xpGanho > 0
              ? <PointsText>+{xpGanho} XP ganhos!</PointsText>
              : <StatusText>Nenhum XP desta vez. Tente amanhã!</StatusText>
            }

            <StatusText style={{ marginTop: 8 }}>
              Disponível novamente amanhã.
            </StatusText>

            {/* aviso do redirecionamento */}
            <StatusText style={{ marginTop: 8 }}>
              Indo para o jogo em 5 segundos...
            </StatusText>
          </StatusBox>
        </>
      ) : (
        <>
          <SubjectBadge>
            <SubjectText>{quiz?.materia}</SubjectText>
          </SubjectBadge>

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
              <OptionText>
                {`${String.fromCharCode(65 + index)}. ${alt}`}
              </OptionText>
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