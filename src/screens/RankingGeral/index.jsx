import React from "react";
import { Image, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRankingGeral } from "../../hooks/useRanking";
import {
  Container, Header, LeftHeader, Logo, BackButton, BackText,
  TopBox, Title, SubTitle, TopUsers, TopUser, Crown,
  AvatarTop, UsernameTop, PointsTop, ListCard, Avatar, Username, Points
} from "./styles";

const DEFAULT_AVATAR = require("../../assets/images/icon_OSG.jpg");

export default function RankingGeral() {
  const navigation = useNavigation();
  const { usuarios, carregando } = useRankingGeral();

  // Top 3 separados do restante
  const top3 = usuarios.slice(0, 3);
  const resto = usuarios.slice(3);

  // Posições do pódio: 2º, 1º, 3º (ordem visual)
  const podio = [top3[1], top3[0], top3[2]];

  if (carregando) {
    return (
      <Container>
        <ActivityIndicator color="#B84EF2" style={{ flex: 1 }} />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <LeftHeader>
          <Image source={require("../../assets/images/libras.jpg")} style={{ width: 40, height: 40 }} />
          <Logo source={require("../../assets/images/icon_OSG.jpg")} />
        </LeftHeader>
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      <TopBox>
        <Title>Ranking Geral</Title>
        <SubTitle>Top jogadores do app</SubTitle>
        <TopUsers>
          {podio.map((user, index) => (
            user ? (
              <TopUser key={user.id}>
                {index === 1 && (
                  <Crown source={require("../../assets/images/crown.png")} />
                )}
                <AvatarTop source={DEFAULT_AVATAR} />
                <UsernameTop>{user.name}</UsernameTop>
                <PointsTop>{user.xp} XP</PointsTop>
              </TopUser>
            ) : <TopUser key={index} />
          ))}
        </TopUsers>
      </TopBox>

      <FlatList
        data={resto}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ListCard>
            <Avatar source={DEFAULT_AVATAR} />
            <Username>{index + 4}. {item.name}</Username>
            <Points>{item.xp} XP</Points>
          </ListCard>
        )}
      />
    </Container>
  );
}