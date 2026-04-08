import React, { useState, useEffect } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableOpacity,
  Alert
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
} from "./styles";

const GROUP_IMAGES = {
  matematica: require("../../assets/images/icon mat.png"),
  ciencias_natureza: require("../../assets/images/icon natural science.png"),
  linguagens: require("../../assets/images/icon linguagens.png"),
  ciencias_humanas: require("../../assets/images/icon ciencias humanas.png"),
  informatica: require("../../assets/images/icon hacker.png"),
};

export default function GrupoChat({ route, navigation }) {
  const { groupId, name } = route.params || {};

  const {
    messages,
    usuariosMap,
    newMessage,
    setNewMessage,
    handleSend,
    user,
    deleteMessage
  } = useChat(groupId);

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true)
    );
    const hideSub = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false)
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const handleLongPress = (message) => {
    const isOwner = message.senderId === user?.uid;

    if (!isOwner) return;

    Alert.alert(
      "Deletar mensagem",
      "Deseja deletar esta mensagem?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Deletar",
          style: "destructive",
          onPress: () => deleteMessage(message.id),
        },
      ]
    );
  };

  return (
    <Container>
      {/* TOPO */}
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

      {/* HEADER */}
      <Header>
        <Logo source={GROUP_IMAGES[groupId]} />
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
          renderItem={({ item }) => {
            const isUser = item.senderId === user?.uid;
            const usuario = usuariosMap[item.senderId];

            return (
              <TouchableOpacity onLongPress={() => handleLongPress(item)}>
                <MessageBubble isUser={isUser}>
                  {!isUser && (
                    <MessageText style={{ fontSize: 12, color: "#aaa", marginBottom: 4 }}>
                      {usuario?.name || "Carregando..."}
                    </MessageText>
                  )}
                  <MessageText>{item.text}</MessageText>
                </MessageBubble>
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{ padding: 20, paddingBottom: 20 }}
          style={{ flex: 1, backgroundColor: "#1f0236" }}
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

      {/* NAVBAR */}
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