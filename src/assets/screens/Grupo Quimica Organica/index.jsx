import React, { useState } from "react";
import { FlatList } from "react-native";
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
import { Ionicons } from "@expo/vector-icons";

export default function QuimicaOrganica({navigation}) {
const [messages, setMessages] =  useState([
    { id: 1, text: "Olá, grupo!", sender: "outro" },
    { id: 2, text: "Tudo bem com vocês?", sender: "outro" },
    { id: 3, text: "Sim! Estudando para a prova de amanhã.", sender: "me" },
    { id: 4, text: "A matéria é bem difícil!", sender: "me" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    const msg = { id: Date.now(), text: newMessage, sender: "me" };
    setMessages([...messages, msg]);
    setNewMessage("");
  };

  return (
    <Container>
      <TopBar>
      <BackButton onPress={() => navigation.goBack()}>
        <OptionText style={{ color: "#C67AFC" }}>Voltar</OptionText>
      </BackButton>
        <Title>OSG</Title>
        <Image source={require("../../images/libras.jpg")} />
      </TopBar>

      <Header>
        <Logo source={require("../../images/quimica_organica.jpg")} />
        <TopBarTitle>Grupo de Química Orgânica</TopBarTitle>
      </Header>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MessageBubble isUser={item.sender === "me"}>
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
