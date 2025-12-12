<<<<<<< HEAD
import React, { useState } from "react";
import { Text } from "react-native";
import {
  Screen,
  Container,
  Title,
  OptionsBox,
  Option,
  OptionText,
  BottomMenu
} from "./styles";

export default function Game() {
  const [selected, setSelected] = useState(null);

  return (
    <Screen edges={["top", "left", "right"]}>
      <Container>
        <Title>Escolha o jogo</Title>

        <OptionsBox>
          <Option onPress={() => setSelected("Jogo 1")}>
            <OptionText>Jogo 1</OptionText>
          </Option>

          <Option onPress={() => setSelected("Jogo 2")}>
            <OptionText>Jogo 2</OptionText>
          </Option>

          <Option onPress={() => setSelected("Jogo 3")}>
            <OptionText>Jogo 3</OptionText>
          </Option>
        </OptionsBox>

        {selected && (
          <Text style={{ color: "white", marginTop: 20 }}>
            Selecionado: {selected}
          </Text>
        )}
      </Container>

      <BottomMenu>
        <Text style={{ color: "white" }}>Home</Text>
        <Text style={{ color: "white" }}>Jogos</Text>
        <Text style={{ color: "white" }}>Perfil</Text>
      </BottomMenu>
    </Screen>
  );
}
=======
import React from "react";
import { FlatList, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  SearchArea,
  IconButton,
  MessageRequest,
  MessageRequestText,
  Divider,
  ChatItem,
  ChatInfo,
  ChatName,
  ChatMessage,
  ChatTime,
  BottomMenu,
  MenuButton,
  MenuText,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ChatList() {
  const navigation = useNavigation();
  const chats = [
    {
      id: 1,
      name: "Menina coreana",
      time: "23:51",
      message: "Arigato",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Mc Lovin",
      time: "03:56",
      message: "Eu sou McLove",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 3,
      name: "MC Pozinho",
      time: "13:53",
      message: "Tá Tega",
      avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      id: 4,
      name: "Caiox",
      time: "00:08",
      message: "Slk Num Compensa",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  return (
    <Container>
      <Header>
        <IconButton onPress={() => navigation.navigate("FiltroEstudo")}>
          <Ionicons name="menu" size={35} color="#B84EF2" />
        </IconButton>
        <SearchArea>
          <Ionicons name="search" size={18} color="#B84EF2" />
        </SearchArea>
        <IconButton>
          <Ionicons name="hand-left" size={24} color="#B84EF2" />
        </IconButton>
      </Header>

      <Title>OSG</Title>

      <MessageRequest>
        <Ionicons name="mail-outline" size={22} color="#B84EF2" />
        <MessageRequestText onPress={() => navigation.navigate("SolicitacaoMensagens")}>Solicitação de Mensagens</MessageRequestText>
      </MessageRequest>

      <Divider />

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ChatItem>
            <Image
              source={{ uri: item.avatar }}
              style={{ width: 45, height: 45, borderRadius: 25, marginRight: 12 }}
            />
            <ChatInfo>
              <ChatName>{item.name}</ChatName>
              <ChatTime>{item.time}</ChatTime>
              <ChatMessage>{item.message}</ChatMessage>
            </ChatInfo>
          </ChatItem>
        )}
      />

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
>>>>>>> fc3b99b (fix: corrigido navegações de algumas telas)
