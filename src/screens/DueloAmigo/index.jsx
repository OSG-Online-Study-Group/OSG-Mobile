import React from "react";
import { ActivityIndicator } from "react-native";
import { useDueloAmigo } from "../../hooks/useDuelo";
import { useAuth } from "../../hooks/useAuth";
import {
  Container,
  CenterWrapper,
  Header,
  TitleQuiz,
  TitleWaiting,
  TitleResult,
  BackButton,
  BackText,
  SubjectBadge,
  SubjectText,
  QuestionCard,
  QuestionText,
  ProgressText,
  OptionButton,
  OptionText,
  StatusBox,
  StatusText,
  ResultCard,
  ResultTitle,
  ResultScore,
  ResultXP,
  WaitingText,
} from "./styles";

export default function DueloAmigo({ route, navigation }) {
  const { dueloId } = route.params;
  const { firebaseUser } = useAuth();
  const {
    duelo,
    perguntaAtual,
    perguntaIndex,
    totalPerguntas,
    respostas,
    finalizado,
    carregando,
    responder,
    getOptionColor,
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
  const pontosAdversario = isDesafiante ? duelo?.pontosDesafiado : duelo?.pontosDesafiante;
  const nomeAdversario = isDesafiante ? duelo?.desafiadoNome : duelo?.desafianteNome;

  const respostaAtual = respostas[perguntaIndex];
  const respondeu = respostaAtual !== undefined;
  const acertou = respondeu && respostaAtual === perguntaAtual?.correta;

  const statusMensagem = respondeu
    ? acertou
      ? "✅ Correto!"
      : `❌ Incorreto. Resposta: ${String.fromCharCode(65 + perguntaAtual?.correta)}`
    : "Escolha uma alternativa.";

  // ── Tela: Aguardando adversário terminar ──────────────────────
  if (finalizado && duelo?.status !== "finalizado") {
    return (
      <Container>
        <Header>
          <TitleWaiting>Duelo Amigos</TitleWaiting>
        </Header>
        <WaitingText>
          ✅ Suas respostas foram enviadas!{"\n"}
          Aguardando {nomeAdversario} responder...
        </WaitingText>
      </Container>
    );
  }

  // ── Tela: Resultado final ─────────────────────────────────────
  if (duelo?.status === "finalizado") {
    const empate = duelo.vencedorId === "empate";
    const venceu = !empate && duelo.vencedorId === firebaseUser?.uid;

    const tituloResultado = empate
      ? "🤝 Empate!"
      : venceu
      ? "🏆 Você venceu!"
      : "😅 Você perdeu!";

    const xpResultado = empate ? "+10 XP" : venceu ? "+25 XP" : "+0 XP";

    return (
      <Container>
        <Header>
          <TitleResult>Resultado</TitleResult>
        </Header>
        <ResultCard>
          <ResultTitle>{tituloResultado}</ResultTitle>
          <ResultScore>Você: {meusPontos}/5</ResultScore>
          <ResultScore>
            {nomeAdversario}: {pontosAdversario}/5
          </ResultScore>
          <ResultXP>{xpResultado}</ResultXP>
        </ResultCard>
        <CenterWrapper>
          <BackButton onPress={() => navigation.navigate("Menu")}>
            <BackText>Voltar ao Menu</BackText>
          </BackButton>
        </CenterWrapper>
      </Container>
    );
  }

  // ── Tela: Quiz em andamento ───────────────────────────────────
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
        <TitleQuiz>Duelo Amigos</TitleQuiz>
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
          disabled={respondeu}
        >
          <OptionText>{`${String.fromCharCode(65 + index)}. ${alt}`}</OptionText>
        </OptionButton>
      ))}

      <StatusBox>
        <StatusText>{statusMensagem}</StatusText>
      </StatusBox>
    </Container>
  );
}
