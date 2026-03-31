import React from "react";
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useChat } from "../../hooks/useChat";

import {
  Container, TopBar, TopRow, Title, Header,
  TopBarTitle, MessageBubble, MessageText,
  InputArea, Input, SendButton, AddButton,
  Logo, BottomMenu, MenuButton, MenuText,
  CenterButton, SearchBar
} from "./styles";

const GROUP_IMAGES = {
  matematica: require("../../assets/images/icon_OSG.jpg"),
  ciencias_natureza: require("../../assets/images/icon_OSG.jpg"),
  linguagens: require("../../assets/images/icon_OSG.jpg"),
  ciencias_humanas: require("../../assets/images/icon_OSG.jpg"),
  informatica: require("../../assets/images/icon_OSG.jpg"),
};

export default function GrupoChat({ route, navigation }) {
  const { groupId, name, subject } = route.params;
  const { messages, newMessage, setNewMessage, handleSend, user } = useChat(groupId);

  const image = GROUP_IMAGES[subject];

  return (
    <Container>

      {/* TOPO IGUAL IMAGEM */}
      <TopBar>
        <TopRow>
          <Ionicons name="menu" size={26} color="#C67AFC"  onPress={() => navigation.navigate("FiltroTreino")}/>
          <Title>OSG</Title>
          <Ionicons name="search" size={22} color="#C67AFC" />
        </TopRow>

        <SearchBar placeholder="Pesquisar..." placeholderTextColor="#aaa" />
      </TopBar>

      {/* HEADER DO GRUPO */}
      <Header>
        {image && <Logo source={image} />}
        <TopBarTitle>{name}</TopBarTitle>
      </Header>

      {/* CHAT */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageBubble isUser={item.senderId === user?.uid}>
            <MessageText>{item.text}</MessageText>
          </MessageBubble>
        )}
        contentContainerStyle={{ padding: 20, paddingBottom: 150 }}
      />

      {/* INPUT */}
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

      {/* NAVBAR IGUAL IMAGEM */}
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