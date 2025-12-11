import React, { useState } from "react";
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
import { enviarMensagemParaIA } from "../../../../src/service/IAservice";

export default function DueloAmigo({ navigation }) {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (newMessage.trim() === "") return;

    // exibe sua mensagem
    const userMessage = {
      id: Date.now(),
      sender: "you",
      text: newMessage,
    };

    setMessages((prev) => [...prev, userMessage]);

    const textToSend = newMessage;
    setNewMessage("");

    try {
      // envia para a IA (via service)
      const resposta = await enviarMensagemParaIA(textToSend);

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: resposta || "Resposta recebida.",
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      const errorMessage = {
        id: Date.now() + 2,
        sender: "bot",
        text: "Erro ao conectar à API.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <Container>

      {/* HEADER */}
      <Header>
        <MenuButton onPress={() => navigation.navigate("FiltroEstudo")}>
          <MenuIcon source={require("../../images/menu.jpg")} />
        </MenuButton>

        <Title>OSG</Title>

        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      {/* CARD DE PERGUNTA */}
      <QuestionCard>
        <QuestionIcon source={require("../../images/espada.jpg")} />
        <QuestionTitle>Responda!</QuestionTitle>

        <QuestionText>
          Liste 3 momentos importantes da era do renascimento
        </QuestionText>
      </QuestionCard>

      {/* CHAT */}
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

      {/* INPUT */}
      <InputArea>
        <AddButton>
          <Title style={{ color: "#fff", fontSize: 22 }}>+</Title>
        </AddButton>

        <Input
          placeholder="Digite aqui!"
          placeholderTextColor="#DCDCDC"
          value={newMessage}
          onChangeText={setNewMessage}
        />

        <SendButton onPress={handleSend}>
          <Title style={{ color: "#fff", fontSize: 20 }}>➤</Title>
        </SendButton>
      </InputArea>

      {/* MENU INFERIOR */}
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
