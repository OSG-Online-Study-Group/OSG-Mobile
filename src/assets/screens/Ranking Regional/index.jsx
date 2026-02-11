import React from "react";
import { FlatList } from "react-native";
import {
  Container,
  Header,
  Title,
  BackText,
  BackButton,
  SearchBox,
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
  { id: "1", name: "Makauli", points: "9999pts", avatar: require("../../images/icon_OSG.jpg") },
  { id: "2", name: "Caiox", points: "6666pts", avatar: require("../../images/icon_OSG.jpg") },
  { id: "3", name: "Natalie", points: "9999pts", avatar: require("../../images/icon_OSG.jpg") },
  { id: "4", name: "McLove", points: "6666pts", avatar: require("../../images/icon_OSG.jpg") },
  { id: "5", name: "Mc Pozinho", points: "5555pts", avatar: require("../../images/icon_OSG.jpg") },
];

import { useNavigation } from "@react-navigation/native";

export default function RankRegional() {

  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
                 <BackText>Voltar</BackText>
               </BackButton>
        <Title>Rank Regional</Title>
      </Header>

      <SearchBox>
        <SearchInput placeholder="Pesquisar usuário..." placeholderTextColor="#E3C4FF" />
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
