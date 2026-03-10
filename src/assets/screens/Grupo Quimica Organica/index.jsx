import React, { useState, useEffect } from "react";
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

// FIREBASE
import { db } from "../../../config/firebase";
import { getAuth } from "firebase/auth";

import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
  getDocs,
  where,
  deleteDoc,
  doc
} from "firebase/firestore";

export default function QuimicaOrganica({ navigation }) {

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const auth = getAuth();
  const user = auth.currentUser;

  // ID DO GRUPO
  const groupId = "Kd92kLm2PqX8zA";

  // APAGAR MENSAGENS ANTIGAS (24h)
  const deleteOldMessages = async () => {

    const oneDayAgo = new Date();
    oneDayAgo.setHours(oneDayAgo.getHours() - 24);

    const q = query(
      collection(db, "groups", groupId, "messages"),
      where("createdAt", "<", oneDayAgo)
    );

    const snapshot = await getDocs(q);

    snapshot.forEach(async (msg) => {
      await deleteDoc(
        doc(db, "groups", groupId, "messages", msg.id)
      );
    });

  };

  // CARREGAR CHAT
  useEffect(() => {

    deleteOldMessages();

    const q = query(
      collection(db, "groups", groupId, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setMessages(msgs.reverse());

    });

    return unsubscribe;

  }, []);

  // ENVIAR MENSAGEM
  const handleSend = async () => {

    if (newMessage.trim() === "") return;

    await addDoc(
      collection(db, "groups", groupId, "messages"),
      {
        text: newMessage,
        senderId: user.uid,
        createdAt: serverTimestamp()
      }
    );

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