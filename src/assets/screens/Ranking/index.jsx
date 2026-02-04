import React from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  LeftHeader,
  Logo,
  BackButton,
  BackText,
  Title,
  Card,
  CardIcon,
  CardText
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function FiltroRanking() {
  const navigation = useNavigation();
  return (
    <Container>

      <Header>
        <LeftHeader>
          <Image
            source={require("../../images/libras.jpg")}
            style={{ width: 40, height: 40 }}
          />

          <Logo source={require("../../images/icon_OSG.jpg")} />
        </LeftHeader>

        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      <Title>Tipos de Ranking</Title>

      <Card onPress={() => navigation.navigate("RankRegional")}>
        <CardIcon source={require("../../images/rank-regional.jpg")} />
        <CardText>Regional</CardText>
      </Card>

      <Card onPress={() => navigation.navigate("RankAmigos")}>
        <CardIcon source={require("../../images/rank-friends.jpg")} />
        <CardText>Entre amigos</CardText>
      </Card>

      <Card onPress={() => navigation.navigate("RankGlobal")}>
        <CardIcon source={require("../../images/rank-global.jpg")} />
        <CardText>Global</CardText>
      </Card>

    </Container>
  );
}
