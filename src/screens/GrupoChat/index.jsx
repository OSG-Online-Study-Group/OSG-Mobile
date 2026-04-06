import React from "react";
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useChat } from "../../hooks/useChat";

import {
  Container,
  TopBar,
  TopRow,
  Title,
  Header,
  TopBarTitle,
  MessageBubble,
  MessageText,
  InputArea,
  Input,
  SendButton,
  AddButton,
  Logo,
  BottomMenu,
  MenuButton,
  MenuText,
  CenterButton,
  SearchBar,
} from "./styles";

const GROUP_IMAGES = {
  matematica: require("../../assets/images/icon mat.png"),
  ciencias_natureza: require("../../assets/images/icon natural science.png"),
  linguagens: require("../../assets/images/icon linguagens.png"),
  ciencias_humanas: require("../../assets/images/icon ciencias humanas.png"),
  informatica: require("../../assets/images/icon hacker.png"),
};

export default function GrupoChat({ route, navigation }) {
  const { groupId, name, subject } = route.params;

  const {
    messages,
    usuariosMap,
    newMessage,
    setNewMessage,
    handleSend,
    user,
  } = useChat(groupId);

  const image = GROUP_IMAGES[subject];

  return (
    <Container>
      {/* 🔝 TOPO */}
      <TopBar>
        <TopRow>
          <Ionicons
            name="menu"
            size={26}
            color="#C67AFC"
            onPress={() => navigation.navigate("FiltroTreino")}
          />
          <Title>OSG</Title>
          <Ionicons name="search" size={22} color="#C67AFC" />
        </TopRow>

        <SearchBar placeholder="Pesquisar..." placeholderTextColor="#aaa" />
      </TopBar>

      {/* 📌 HEADER DO GRUPO */}
      <Header>
        {image && <Logo source={image} />}
        <TopBarTitle>{name}</TopBarTitle>
      </Header>

      {/* 💬 CHAT */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isUser = item.senderId === user?.uid;
          const usuario = usuariosMap[item.senderId];

          return (
            <MessageBubble isUser={isUser}>
              {/* 🔥 NOME (só para outros usuários) */}
              {!isUser && (
                <MessageText
                  style={{
                    fontSize: 12,
                    color: "#aaa",
                    marginBottom: 4,
                  }}
                >
                  {usuario?.name || "Carregando..."}
                </MessageText>
              )}

              {/* 💬 TEXTO */}
              <MessageText>{item.text}</MessageText>
            </MessageBubble>
          );
        }}
        contentContainerStyle={{ padding: 20, paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
      />

      {/* ✍️ INPUT */}
      <InputArea>
        <AddButton>
          <Ionicons name="add" size={20} color="#fff" />
        </AddButton>

        <Input
          placeholder="Digite aqui!"
          placeholderTextColor="#DCDCDC"
          value={newMessage}
          onChangeText={setNewMessage}
        />

        <SendButton onPress={handleSend}>
          <Ionicons name="send" size={18} color="#fff" />
        </SendButton>
      </InputArea>

      {/* 🔻 NAVBAR */}
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