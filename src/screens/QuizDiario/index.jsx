import React, { useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { auth } from "../../services/firebase";
import { enviarMensagemParaIA } from "../../services/openrouter";
import { db } from "../../services/firebase";
import { doc, getDoc, increment, setDoc } from "firebase/firestore";
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

const DAILY_POINTS = 10;

const MATERIAS = [
  "Matematica",
  "Fisica",
  "Quimica",
  "Biologia",
  "Historia",
  "Geografia",
  "Filosofia",
  "Sociologia",
  "Portugues",
  "Literatura",
];

const FALLBACK_QUIZ = {
  materia: "Matematica",
  pergunta: "Quanto e 7 x 8?",
  alternativas: ["54", "56", "58", "64"],
  correta: 1,
};

function parseQuizResponse(rawText) {
  if (!rawText || typeof rawText !== "string") {
    return FALLBACK_QUIZ;
  }

  const jsonMatch = rawText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    return FALLBACK_QUIZ;
  }

  try {
    const parsed = JSON.parse(jsonMatch[0]);
    const hasValidAlternatives =
      Array.isArray(parsed.alternativas) && parsed.alternativas.length === 4;
    const hasValidCorrect =
      Number.isInteger(parsed.correta) && parsed.correta >= 0 && parsed.correta <= 3;

    if (!parsed.pergunta || !hasValidAlternatives || !hasValidCorrect) {
      return FALLBACK_QUIZ;
    }

    return {
      materia: parsed.materia || "Geral",
      pergunta: String(parsed.pergunta),
      alternativas: parsed.alternativas.map((item) => String(item)),
      correta: parsed.correta,
    };
  } catch (error) {
    return FALLBACK_QUIZ;
  }
}

function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

export default function QuizDiario({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [quizData, setQuizData] = useState(FALLBACK_QUIZ);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [alreadyPlayedToday, setAlreadyPlayedToday] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [earnedPoints, setEarnedPoints] = useState(0);

  const user = auth.currentUser;

  const userRef = useMemo(() => {
    if (!user) return null;
    return doc(db, "users", user.uid);
  }, [user]);

  useEffect(() => {
    carregarQuizDiario();
  }, []);

  const carregarQuizDiario = async () => {
    setLoading(true);

    if (!userRef) {
      setStatusMessage("Faca login para jogar o quiz diario e ganhar pontos.");
      await gerarPerguntaAleatoria();
      setLoading(false);
      return;
    }

    try {
      const snapshot = await getDoc(userRef);
      const lastDailyQuizDate = snapshot.exists() ? snapshot.data().lastDailyQuizDate : null;

      if (lastDailyQuizDate === getTodayKey()) {
        setAlreadyPlayedToday(true);
        setStatusMessage("Voce ja respondeu o quiz diario de hoje.");
      } else {
        await gerarPerguntaAleatoria();
      }
    } catch (error) {
      setStatusMessage("Nao foi possivel verificar seu quiz diario.");
      await gerarPerguntaAleatoria();
    } finally {
      setLoading(false);
    }
  };

  const gerarPerguntaAleatoria = async () => {
    const materiaEscolhida = MATERIAS[Math.floor(Math.random() * MATERIAS.length)];

    const prompt = `
      Gere uma pergunta de multipla escolha de nivel ensino medio sobre ${materiaEscolhida}.
      Retorne SOMENTE um JSON valido no formato:
      {
        "materia": "${materiaEscolhida}",
        "pergunta": "texto da pergunta",
        "alternativas": ["opcao A", "opcao B", "opcao C", "opcao D"],
        "correta": 0
      }
      Regras:
      - Exatamente 4 alternativas.
      - Apenas uma correta.
      - O campo "correta" deve ser um indice de 0 a 3.
      - Nao inclua markdown.
    `;

    try {
      const resposta = await enviarMensagemParaIA(prompt);
      const parsedQuiz = parseQuizResponse(resposta);
      setQuizData(parsedQuiz);
      setSelectedIndex(null);
      setEarnedPoints(0);
      setStatusMessage("");
    } catch (error) {
      setQuizData(FALLBACK_QUIZ);
      setStatusMessage("Falha ao gerar pergunta. Exibindo pergunta padrao.");
    }
  };

  const responder = async (index) => {
    if (selectedIndex !== null || loading) return;

    setSelectedIndex(index);

    const acertou = index === quizData.correta;
    const pontos = acertou ? DAILY_POINTS : 0;
    setEarnedPoints(pontos);

    if (acertou) {
      setStatusMessage("Resposta correta.");
    } else {
      setStatusMessage("Resposta incorreta.");
    }

    if (!userRef) return;

    if (alreadyPlayedToday) {
      return;
    }

    try {
      await setDoc(
        userRef,
        {
          points: increment(pontos),
          lastDailyQuizDate: getTodayKey(),
          lastDailyQuizCorrect: acertou,
          lastDailyQuizMateria: quizData.materia,
        },
        { merge: true }
      );

      setAlreadyPlayedToday(true);
    } catch (error) {
      Alert.alert("Erro", "Nao foi possivel salvar seu resultado do quiz diario.");
    }
  };

  const getOptionColor = (index) => {
    if (selectedIndex === null) return "#4c2d6f";

    if (index === quizData.correta) return "#2f9e44";

    if (index === selectedIndex && index !== quizData.correta) return "#c92a2a";

    return "#4c2d6f";
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
        <Title>Quiz Diario</Title>
        <BackButton onPress={() => navigation.navigate("Game")}>
          <BackText>Menu</BackText>
        </BackButton>
      </Header>

      <SubjectBadge>
        <SubjectText>{quizData.materia}</SubjectText>
      </SubjectBadge>

      <QuestionCard>
        <QuestionText>{quizData.pergunta}</QuestionText>
      </QuestionCard>

      {quizData.alternativas.map((alternativa, index) => (
        <OptionButton
          key={`${alternativa}-${index}`}
          background={getOptionColor(index)}
          onPress={() => responder(index)}
          disabled={selectedIndex !== null || alreadyPlayedToday}
        >
          <OptionText>{`${String.fromCharCode(65 + index)}. ${alternativa}`}</OptionText>
        </OptionButton>
      ))}

      <StatusBox>
        <StatusText>{loading ? "Carregando quiz..." : statusMessage || "Escolha uma alternativa."}</StatusText>
        {earnedPoints > 0 && <PointsText>{`+${earnedPoints} pontos`}</PointsText>}
      </StatusBox>

      <ActionButton
        onPress={async () => {
          if (alreadyPlayedToday) {
            Alert.alert("Quiz diario", "Volte amanha para ganhar mais pontos.");
            return;
          }

          await gerarPerguntaAleatoria();
        }}
      >
        <ActionButtonText>{alreadyPlayedToday ? "Disponivel amanha" : "Nova pergunta"}</ActionButtonText>
      </ActionButton>
    </Container>
  );
}
