import React from "react";
import { FlatList } from "react-native";
import {
  Container, Header, Title, MessageBubble, InputArea,
  Input, SendButton, MessageText, AddButton, TopBar,
  TopBarTitle, Logo, BackButton, OptionText, Image,
  BottomMenu, MenuText, MenuButton
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useChat } from "../../hooks/useChat";

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
      <TopBar>
        <BackButton onPress={() => navigation.goBack()}>
          <OptionText style={{ color: "#C67AFC" }}>Voltar</OptionText>
        </BackButton>
        <Title>OSG</Title>
        <Image source={require("../../assets/images/libras.jpg")} />
      </TopBar>
      <Header>
        {image && <Logo source={image} />}
        <TopBarTitle>{name}</TopBarTitle>
      </Header>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageBubble isUser={item.senderId === user?.uid}>
            <MessageText>{item.text}</MessageText>
          </MessageBubble>
        )}
        contentContainerStyle={{ padding: 20 }}
      />
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
      <BottomMenu>
        <MenuButton onPress={() => navigation.navigate("Menu")}>
          <Ionicons name="home-outline" size={20} color="#fff" />
          <MenuText>Home</MenuText>
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate("Game")}>
          <Ionicons name="game-controller-outline" size={20} color="#fff" />
          <MenuText>Game</MenuText>
        </MenuButton>
        <MenuButton active>
          <Ionicons name="chatbubble-ellipses" size={22} color="#fff" />
          <MenuText>Grupos</MenuText>
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-outline" size={20} color="#fff" />
          <MenuText>Perfil</MenuText>
        </MenuButton>
      </BottomMenu>
    </Container>
  );
}