import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
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
  AvatarWrapper,
  AvatarImage,
  AvatarText,
  MessageRow,
  MessageWrapper,
  SenderName,
  MessageMeta,
  MessageTime,
  DeletedMessage,
  DeletedText,
  DeleteButton,
} from "./styles";

const GROUP_IMAGES = {
  matematica: require("../../assets/images/icon mat.png"),
  ciencias_natureza: require("../../assets/images/icon natural science.png"),
  linguagens: require("../../assets/images/icon linguagens.png"),
  ciencias_humanas: require("../../assets/images/icon ciencias humanas.png"),
  informatica: require("../../assets/images/icon hacker.png"),
};

function corDoAvatar(nome = "") {
  const cores = ["#6A3BA7", "#B84EF2", "#3F235A", "#8E44AD", "#5B2C6F"];
  return cores[nome.charCodeAt(0) % cores.length];
}

function formatarHora(createdAt) {
  if (!createdAt) return "";
  const date = createdAt.toDate ? createdAt.toDate() : new Date(createdAt);
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function iniciais(nome = "") {
  return nome
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function GrupoChat({ route, navigation }) {
  const { groupId, name, subject } = route.params;
  const {
    messages,
    newMessage,
    setNewMessage,
    handleSend,
    handleDelete,
    user,
    isAdmin,
  } = useChat(groupId);

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const groupKey = (subject || groupId || "").replace("group_", "");
  const groupLogo =
    GROUP_IMAGES[groupKey];

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true),
    );
    const hideSub = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false),
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const renderAvatar = (item) => {
    if (item.senderPhoto) {
      return <AvatarImage source={{ uri: item.senderPhoto }} />;
    }
    return (
      <AvatarWrapper color={corDoAvatar(item.senderName)}>
        <AvatarText>{iniciais(item.senderName)}</AvatarText>
      </AvatarWrapper>
    );
  };

  const renderMensagem = ({ item }) => {
    const isUser = item.senderId === user?.uid;

    if (item.deleted) {
      return (
        <DeletedMessage isUser={isUser}>
          <DeletedText>[mensagem deletada]</DeletedText>
        </DeletedMessage>
      );
    }

    return (
      <MessageRow isUser={isUser}>
        {renderAvatar(item)}

        <MessageWrapper>
          {!isUser && <SenderName>{item.senderName}</SenderName>}

          <MessageBubble isUser={isUser}>
            <MessageText>{item.text}</MessageText>

            <MessageMeta>
              <MessageTime isUser={isUser}>
                {formatarHora(item.createdAt)}
              </MessageTime>

              {isAdmin && (
                <DeleteButton onPress={() => handleDelete(item.id)}>
                  <Ionicons
                    name="trash-outline"
                    size={13}
                    color={isUser ? "#D1A8FF" : "#888"}
                  />
                </DeleteButton>
              )}
            </MessageMeta>
          </MessageBubble>
        </MessageWrapper>
      </MessageRow>
    );
  };

  return (
    <Container>
      <TopBar>
        <TopRow>
          <Title>OSG</Title>
          <Ionicons name="search" size={22} color="#C67AFC" />
        </TopRow>

        <SearchBar placeholder="Pesquisar..." placeholderTextColor="#aaa" />
      </TopBar>

      <Header>
        <Logo source={groupLogo} />
        <TopBarTitle>{name}</TopBarTitle>
      </Header>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMensagem}
          contentContainerStyle={{ padding: 8, paddingBottom: 150 }}
        />

        {/* INPUT */}
        <InputArea style={{ marginBottom: keyboardVisible ? 20 : 120 }}>
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
      </KeyboardAvoidingView>

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
