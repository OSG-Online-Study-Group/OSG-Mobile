import React from "react";
import { FlatList, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  SearchArea,
  IconButton,
  BackButton,
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
import BottomNav from "../../components/BottomNav";
import  COLORS  from "../../constants/colors";

export default function SolicitacaoMensagens({ navigation }) {
  const mensagens = [
    {
      id: 1,
      name: "Makauli",
      time: "20:26",
      message: "Salve dogão",
      avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      id: 2,
      name: "Natalie",
      time: "18:14",
      message: "Oii!!",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 3,
      name: "Reboco",
      time: "23:51",
      message: "Boa noite Vida!",
      avatar: "https://randomuser.me/api/portraits/men/48.jpg",
    },
  ];

  return (
    <Container>
      <Header>
        <IconButton onPress={() => navigation.navigate("FiltroTreino")}>
          <Ionicons name="menu" size={35} color="#B84EF2" />
        </IconButton>

        <SearchArea>
          <Ionicons name="search" size={18} color="#B84EF2" />
        </SearchArea>

        <IconButton>
          <Ionicons name="" size={24} color="#B84EF2" />
        </IconButton>
      </Header>

      <Title>OSG</Title>

      <BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-undo" size={22} color="#B84EF2" />
      </BackButton>

      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ChatItem>
            <Image
              source={{ uri: item.avatar }}
              style={{
                width: 45,
                height: 45,
                borderRadius: 25,
                marginRight: 12,
              }}
            />
            <ChatInfo>
              <ChatName>{item.name}</ChatName>
              <ChatTime>{item.time}</ChatTime>
              <ChatMessage>{item.message}</ChatMessage>
            </ChatInfo>
          </ChatItem>
        )}
      />

      <BottomNav />
    </Container>
  );
}
