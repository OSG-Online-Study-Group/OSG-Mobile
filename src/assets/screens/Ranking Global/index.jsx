import React from "react";
import { FlatList } from "react-native";
import {
  Container,
  Header,
  Title,
  BackButton,
  SearchBox,
  BackText,
  SearchInput,
  SearchIcon,
  TableHeader,
  HeaderText,
  Item,
  Avatar,
  Username,
  Points
} from "./styles";

const data = [
  { id: "1", name: "Marsha", points: "9999pts", avatar: require("../../images/icon_OSG.jpg") },
  { id: "2", name: "IG", points: "8888pts", avatar: require("../../images/icon_OSG.jpg") },
  { id: "3", name: "Karina", points: "7777pts", avatar: require("../../images/icon_OSG.jpg") },
  { id: "4", name: "Veigh", points: "6666pts", avatar: require("../../images/icon_OSG.jpg") },
  { id: "5", name: "Dfideliz", points: "5555pts", avatar: require("../../images/icon_OSG.jpg") }
];

import { useNavigation } from "@react-navigation/native";

export default function RankGlobal() {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
        <Title>Rank Global</Title>
      </Header>

      <SearchBox>
        <SearchInput placeholder="Pesquisar usuário:" placeholderTextColor="#E3C4FF" />
        <SearchIcon>🔍</SearchIcon>
      </SearchBox>

      <TableHeader>
        <HeaderText>Usuário</HeaderText>
        <HeaderText>Pontuação</HeaderText>
      </TableHeader>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item>
            <Avatar source={item.avatar} />
            <Username>{item.name}</Username>
            <Points>{item.points}</Points>
          </Item>
        )}
      />
    </Container>
  );
}
