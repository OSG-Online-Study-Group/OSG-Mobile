import React from "react";
import { Image } from "react-native";
import {
  Container, Header, Logo, HeaderCenterIcon,
  BackButton, BackText, Card, CardText, CardText2
} from "./styles";

// 🔥 ícones
const GROUP_IMAGES = {
  matematica: require("../../assets/images/icon mat.png"),
  ciencias_natureza: require("../../assets/images/icon natural science.png"),
  linguagens: require("../../assets/images/icon linguagens.png"),
  ciencias_humanas: require("../../assets/images/icon ciencias humanas.png"),
  informatica: require("../../assets/images/icon hacker.png"),
};

export default function FiltroTreino({ navigation }) {
  return (
    <Container>
      <Header>
        <HeaderCenterIcon source={require("../../assets/images/icon_OSG.jpg")} />
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      {/* Matemática */}
      <Card onPress={() => navigation.navigate("Treino", { categoria: "matematica" })}>
        <Image source={GROUP_IMAGES.matematica} style={{ width: 40, height: 40, marginRight: 15 }} />
        <CardText>Matemática</CardText>
      </Card>

      {/* Ciências da Natureza */}
      <Card onPress={() => navigation.navigate("Treino", { categoria: "ciencias_natureza" })}>
        <Image source={GROUP_IMAGES.ciencias_natureza} style={{ width: 40, height: 40, marginRight: 15 }} />
        <CardText>Ciências da Natureza</CardText>
      </Card>

      {/* Ciências Humanas */}
      <Card onPress={() => navigation.navigate("Treino", { categoria: "ciencias_humanas" })}>
        <Image source={GROUP_IMAGES.ciencias_humanas} style={{ width: 40, height: 40, marginRight: 15 }} />
        <CardText>Ciências Humanas</CardText>
      </Card>

      {/* Linguagens */}
      <Card onPress={() => navigation.navigate("Treino", { categoria: "linguagens" })}>
        <Image source={GROUP_IMAGES.linguagens} style={{ width: 40, height: 40, marginRight: 15 }} />
        <CardText>Linguagens</CardText>
      </Card>

      {/* Informática */}
      <Card onPress={() => navigation.navigate("Treino", { categoria: "informatica" })}>
        <Image source={GROUP_IMAGES.informatica} style={{ width: 40, height: 40, marginRight: 15 }} />
        <CardText2>Informática</CardText2>
      </Card>

    </Container>
  );
}