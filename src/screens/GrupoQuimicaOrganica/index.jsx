import React from "react";
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useChat } from "../../hooks/useChat";

import {
  Container,
  Header,
  Title,
  MessageBubble,
  InputArea,
  Input,
  SendButton,
  MessageText,
  AddButton,
  TopBar,
  TopBarTitle,
  Logo,
  BackButton,
  OptionText,
  Image,
  BottomMenu,
  MenuText,
  MenuButton
} from "./styles";

export default function QuimicaOrganica({ navigation }) {

const { messages, newMessage, setNewMessage, handleSend, user } =
  useChat("group_quimica_organica");

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
        <Logo source={require("../../assets/images/quimica_organica.jpg")} />
        <TopBarTitle>Grupo de Química Orgânica</TopBarTitle>
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

        <MenuButton>
          <Ionicons name="home-outline" size={20} color="#fff" />
          <MenuText>Home</MenuText>
        </MenuButton>

        <MenuButton>
          <Ionicons name="game-controller-outline" size={20} color="#fff" />
          <MenuText>Game</MenuText>
        </MenuButton>

        <MenuButton active>
          <Ionicons name="chatbubble-ellipses" size={22} color="#fff" />
          <MenuText>Grupos</MenuText>
        </MenuButton>

        <MenuButton>
          <Ionicons name="book-outline" size={20} color="#fff" />
          <MenuText>Matérias</MenuText>
        </MenuButton>

        <MenuButton>
          <Ionicons name="person-outline" size={20} color="#fff" />
          <MenuText>Perfil</MenuText>
        </MenuButton>

      </BottomMenu>

    </Container>

  );
}