import React from "react";
<<<<<<< HEAD
import { Image, TouchableOpacity } from "react-native";
=======
import { Image } from "react-native";
>>>>>>> fc3b99b (fix: corrigido navegações de algumas telas)
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
<<<<<<< HEAD

export default function FiltroRanking({ navigation }) {
  return (
    <Container>

      {/* ===== HEADER ===== */}
=======
import { useNavigation } from "@react-navigation/native";

export default function FiltroRanking() {
  const navigation = useNavigation();
  return (
    <Container>

>>>>>>> fc3b99b (fix: corrigido navegações de algumas telas)
      <Header>
        <LeftHeader>
          <Image
            source={require("../../images/libras.jpg")}
            style={{ width: 40, height: 40 }}
          />

          <Logo source={require("../../images/icon_OSG.jpg")} />
        </LeftHeader>

<<<<<<< HEAD
        {/* VOLTAR */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton>
            <BackText>Voltar</BackText>
          </BackButton>
        </TouchableOpacity>
=======
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
>>>>>>> fc3b99b (fix: corrigido navegações de algumas telas)
      </Header>

      <Title>Tipos de Ranking</Title>

<<<<<<< HEAD
      {/* ===== CARDS DE RANKING ===== */}
      <TouchableOpacity onPress={() => navigation.navigate("RankRegional")}>
        <Card>
          <CardIcon source={require("../../images/rank-regional.jpg")} />
          <CardText>Regional</CardText>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("RankAmigos")}>
        <Card>
          <CardIcon source={require("../../images/rank-friends.jpg")} />
          <CardText>Entre amigos</CardText>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("RankGlobal")}>
        <Card>
          <CardIcon source={require("../../images/rank-global.jpg")} />
          <CardText>Global</CardText>
        </Card>
      </TouchableOpacity>

    </Container>
  );
}
=======
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
>>>>>>> fc3b99b (fix: corrigido navegações de algumas telas)
