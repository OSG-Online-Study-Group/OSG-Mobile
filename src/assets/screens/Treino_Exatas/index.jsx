import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  MenuButton,
  MenuIcon,
  Title,
  BackButton,
  BackText,
  QuestionCard,
  QuestionIcon,
  QuestionTitle,
  QuestionText,
  ChatArea,
  MessageRow,
  Avatar,
  MessageBubble,
  MessageText,
  InputArea,
  SendButton,
  AddButton,
  BottomMenu,
  MenuText,
  Input,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { enviarMensagemParaIA } from "../../../service/IAservice";

export default function QuizExatas({ navigation }) {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [perguntaAtual, setPerguntaAtual] = useState("");

  // 🔹 Gera pergunta ao iniciar
  useEffect(() => {
    gerarPergunta();
  }, []);

  const gerarPergunta = async () => {
    try {
      const prompt = `
      Gere uma pergunta objetiva de EXATAS (matemática, física ou química).
      A pergunta deve ter resposta curta.
      Retorne apenas a pergunta, sem explicação.
      `;

      const resposta = await enviarMensagemParaIA(prompt);

      setPerguntaAtual(resposta);

      const botMessage = {
        id: Date.now(),
        sender: "bot",
        text: resposta,
      };

      setMessages([botMessage]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSend = async () => {
    if (newMessage.trim() === "") return;

    const userAnswer = newMessage;

    const userMessage = {
      id: Date.now(),
      sender: "you",
      text: userAnswer,
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    try {
      const promptCorrecao = `
      Pergunta: ${perguntaAtual}
      Resposta do aluno: ${userAnswer}

      Diga apenas:
      CORRETA ou INCORRETA.
      Depois explique brevemente o motivo.
      `;

      const respostaIA = await enviarMensagemParaIA(promptCorrecao);

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: respostaIA,
      };

      setMessages((prev) => [...prev, botMessage]);

      // 🔹 Após responder, gera nova pergunta
      setTimeout(() => {
        gerarPergunta();
      }, 3000);

    } catch (error) {
      const errorMessage = {
        id: Date.now() + 2,
        sender: "bot",
        text: "Erro ao corrigir resposta.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <Container>

      <Header>
        <MenuButton onPress={() => navigation.navigate("FiltroEstudo")}>
          <MenuIcon source={require("../../images/menu.jpg")} />
        </MenuButton>

        <Title>Quiz Exatas</Title>

        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      <QuestionCard>
        <QuestionIcon source={require("../../images/espada.jpg")} />
        <QuestionTitle>Modo Exatas</QuestionTitle>
        <QuestionText>
          Responda corretamente e avance!
        </QuestionText>
      </QuestionCard>

      <ChatArea>
        {messages.map((msg) => (
          <MessageRow
            key={msg.id}
            style={{
              justifyContent:
                msg.sender === "you" ? "flex-end" : "flex-start",
            }}
          >
            {msg.sender === "bot" && (
              <Avatar source={require("../../images/profile_photo.jpg")} />
            )}

            <MessageBubble
              style={{
                backgroundColor:
                  msg.sender === "you" ? "#6A3BA7" : "#3F235A",
              }}
            >
              <MessageText>{msg.text}</MessageText>
            </MessageBubble>

            {msg.sender === "you" && (
              <Avatar source={require("../../images/profile_photo.jpg")} />
            )}
          </MessageRow>
        ))}
      </ChatArea>

      <InputArea>
        <AddButton>
          <Title style={{ color: "#fff", fontSize: 22 }}>+</Title>
        </AddButton>

        <Input
          placeholder="Digite sua resposta..."
          placeholderTextColor="#DCDCDC"
          value={newMessage}
          onChangeText={setNewMessage}
        />

        <SendButton onPress={handleSend}>
          <Title style={{ color: "#fff", fontSize: 20 }}>➤</Title>
        </SendButton>
      </InputArea>

      <BottomMenu>
        <MenuButton onPress={() => navigation.navigate("Menu")}>
          <Ionicons name="home-outline" size={20} color="#fff" />
          <MenuText>Home</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Game")}>
          <Ionicons name="game-controller-outline" size={20} color="#fff" />
          <MenuText>Game</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("ChatList")}>
          <Ionicons name="chatbubble-ellipses" size={22} color="#fff" />
          <MenuText>Grupos</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("FiltroEstudo")}>
          <Ionicons name="book-outline" size={20} color="#fff" />
          <MenuText>Matérias</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-outline" size={20} color="#fff" />
          <MenuText>Perfil</MenuText>
        </MenuButton>
      </BottomMenu>

    </Container>
  );
}