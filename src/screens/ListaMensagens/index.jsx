import React, { useEffect, useState } from "react";
import { FlatList, Image, Modal, View, Text } from "react-native";
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
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BottomNav from "../../components/BottomNav";

export default function ChatList() {
  const navigation = useNavigation();

  const [showMessage, setShowMessage] = useState(true);

  // mensagem some automaticamente
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);

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
    <>
      {/* 🔥 MODAL FULLSCREEN */}
      <Modal visible={showMessage} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(37, 4, 70, 0.9)",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Esta parte ainda não foi concluida pelos nossos desenvolvedores... Mas fique tranquilo, em breve você poderá conversar com seus amigos e trocar dicas de estudo por aqui! 🚀
          </Text>
        </View>
      </Modal>

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

        <MessageRequest>
          <Ionicons name="mail-outline" size={22} color="#B84EF2" />
          <MessageRequestText
            onPress={() => navigation.navigate("SolicitacaoMensagens")}
          >
            Solicitação de Mensagens
          </MessageRequestText>
        </MessageRequest>

        <Divider />

        <FlatList
          data={chats}
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
    </>
  );
}