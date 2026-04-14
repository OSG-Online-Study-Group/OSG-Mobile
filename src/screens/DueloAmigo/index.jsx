import React from "react";
import { ActivityIndicator } from "react-native";
import { useDueloAmigo } from "../../hooks/useDuelo";
import { useAuth } from "../../hooks/useAuth";
import {
  Container, Header, BackButton, BackText, Title,
  SubjectBadge, SubjectText, QuestionCard, QuestionText,
  ProgressText, OptionButton, OptionText,
  StatusBox, StatusText, ResultCard,
  ResultTitle, ResultScore, ResultXP,
  WaitingText,
} from "./styles";

export default function DueloAmigo({ route, navigation }) {
  const { dueloId } = route.params;
  const { firebaseUser } = useAuth();
  const {
    duelo, perguntaAtual, perguntaIndex,
    totalPerguntas, respostas, finalizado,
    carregando, responder, getOptionColor,
  } = useDueloAmigo(dueloId);

  if (carregando) {
    return (
      <Container>
        <ActivityIndicator color="#B84EF2" style={{ flex: 1 }} />
      </Container>
    );
  }

  const isDesafiante = duelo?.desafianteId === firebaseUser?.uid;
  const meusPontos = isDesafiante ? duelo?.pontosDesafiante : duelo?.pontosDesafiado;
  const pontoAdversario = isDesafiante ? duelo?.pontosDesafiado : duelo?.pontosDesafiante;
  const nomeAdversario = isDesafiante ? duelo?.desafiadoNome : duelo?.desafianteNome;

  // Aguardando adversário terminar
  if (finalizado && duelo?.status !== "finalizado") {
    return (
      <Container>
        <Header>
          <Title>Duelo Amigos</Title>
        </Header>
        <WaitingText>
          ✅ Suas respostas foram enviadas!{"\n"}
          Aguardando {nomeAdversario} responder...
        </WaitingText>
      </Container>
    );
  }

  // Resultado final
  if (duelo?.status === "finalizado") {
    const venceu = duelo.vencedorId === firebaseUser?.uid;
    const empate = duelo.vencedorId === "empate";

    return (
      <Container>
        <Header>
          <Title>Resultado</Title>
        </Header>
        <ResultCard>
          <ResultTitle>
            {empate ? "🤝 Empate!" : venceu ? "🏆 Você venceu!" : "😅 Você perdeu!"}
          </ResultTitle>
          <ResultScore>Você: {meusPontos}/5</ResultScore>
          <ResultScore>{nomeAdversario}: {pontoAdversario}/5</ResultScore>
          <ResultXP>
            {empate ? "+10 XP" : venceu ? "+25 XP" : "+0 XP"}
          </ResultXP>
        </ResultCard>
        <BackButton onPress={() => navigation.navigate("Menu")} style={{ alignSelf: "center", marginTop: 20 }}>
          <BackText>Voltar ao Menu</BackText>
        </BackButton>
      </Container>
    );
  }

  // Quiz em andamento
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
        <Title>Duelo Amigos</Title>
      </Header>

      <SubjectBadge>
        <SubjectText>vs {nomeAdversario}</SubjectText>
      </SubjectBadge>

      <ProgressText>
        Pergunta {perguntaIndex + 1} de {totalPerguntas}
      </ProgressText>

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
        <StatusText>
          {respostas[perguntaIndex] !== undefined
            ? respostas[perguntaIndex] === perguntaAtual?.correta
              ? "✅ Correto!"
              : `❌ Incorreto. Resposta: ${String.fromCharCode(65 + perguntaAtual?.correta)}`
            : "Escolha uma alternativa."}
        </StatusText>
      </StatusBox>
    </Container>
  );
}