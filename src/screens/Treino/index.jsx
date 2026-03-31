import React from "react";
import { ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTreino } from "../../hooks/useTreino";

import {
  Container, Header, MenuButton, MenuIcon, Title,
  BackButton, BackText, QuestionCard, QuestionIcon,
  QuestionTitle, QuestionText, ChatArea, MessageRow,
  Avatar, MessageBubble, MessageText, InputArea,
  SendButton, AddButton, Input,

  BottomMenu, CenterButton, MenuText
} from "./styles";

export default function Treino({ route, navigation }) {
  const { categoria } = route.params;

  const {
    messages, newMessage, setNewMessage,
    handleSend, carregando, xpTotal, config,
  } = useTreino(categoria);

  return (
    <Container>

      <Header>
        <MenuButton onPress={() => navigation.navigate("FiltroEstudo")}>
          <MenuIcon source={require("../../assets/images/menu.jpg")} />
        </MenuButton>

        <Title>Treino {config.label}</Title>

        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      <QuestionCard>
        <QuestionIcon source={require("../../assets/images/espada.jpg")} />
        <QuestionTitle>Modo {config.label}</QuestionTitle>
        <QuestionText>
          {xpTotal > 0
            ? `+${xpTotal} XP ganhos nessa sessão!`
            : "Responda e ganhe XP!"}
        </QuestionText>
      </QuestionCard>

      {carregando ? (
        <ActivityIndicator color="#B84EF2" style={{ flex: 1 }} />
      ) : (
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
                <Avatar source={require("../../assets/images/profile_photo.jpg")} />
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
                <Avatar source={require("../../assets/images/profile_photo.jpg")} />
              )}
            </MessageRow>
          ))}
        </ChatArea>
      )}

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

      {/* ✅ NAVBAR MANUAL */}
      <BottomMenu>

        <MenuButton onPress={() => navigation.navigate("Menu")}>
          <Ionicons name="home-outline" size={22} color="#fff" />
          <MenuText>Home</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Game")}>
          <Ionicons name="game-controller-outline" size={22} color="#fff" />
          <MenuText>Game</MenuText>
        </MenuButton>

        <CenterButton onPress={() => navigation.navigate("Ranking")}>
          <Ionicons name="trophy" size={28} color="#fff" />
        </CenterButton>

        <MenuButton onPress={() => navigation.navigate("Grupos")}>
          <Ionicons name="grid-outline" size={22} color="#fff" />
          <MenuText>Grupos</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-outline" size={22} color="#fff" />
          <MenuText>Perfil</MenuText>
        </MenuButton>

      </BottomMenu>

    </Container>
  );
}