import React, { useState } from "react";
import { useTreino } from "../../hooks/useTreino";
import {
  Container, Header, MenuButton, MenuIcon, Title,
  BackButton, BackText, QuestionCard, QuestionIcon,
  QuestionTitle, QuestionText, ChatArea, MessageRow,
  Avatar, MessageBubble, MessageText, InputArea,
  SendButton, AddButton, BottomMenu, MenuText, Input,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function TreinoExatas({ navigation }) {
  const { messages, responder } = useTreino("exatas");
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    responder(input);
    setInput("");
  };

  return (
    <Container>
      <Header>
        <MenuButton onPress={() => navigation.navigate("FiltroEstudo")}>
          <MenuIcon source={require("../../assets/images/menu.jpg")} />
        </MenuButton>

        <Title>Exatas</Title>

        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      <QuestionCard>
        <QuestionIcon source={require("../../assets/images/espada.jpg")} />
        <QuestionTitle>Modo Treino</QuestionTitle>
        <QuestionText>Exatas</QuestionText>
      </QuestionCard>

      <ChatArea>
        {messages.map((msg) => (
          <MessageRow key={msg.id} style={{
            justifyContent: msg.sender === "you" ? "flex-end" : "flex-start",
          }}>
            <MessageBubble>
              <MessageText>{msg.text}</MessageText>
            </MessageBubble>
          </MessageRow>
        ))}
      </ChatArea>

      <InputArea>
        <Input value={input} onChangeText={setInput} placeholder="Resposta..." />
        <SendButton onPress={handleSend}>
          <Title>➤</Title>
        </SendButton>
      </InputArea>

      <BottomMenu>
        <MenuButton onPress={() => navigation.navigate("Menu")}>
          <Ionicons name="home-outline" size={20} color="#fff" />
          <MenuText>Home</MenuText>
        </MenuButton>
      </BottomMenu>
    </Container>
  );
}