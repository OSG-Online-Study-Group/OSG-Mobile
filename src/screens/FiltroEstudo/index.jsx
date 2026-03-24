import React from "react";
import {
  Container, Header, Logo, HeaderCenterIcon,
  BackButton, BackText, Card, CardBackground,
  CardText, CardBackground2, CardText2,
} from "./styles";

export default function FiltroEstudo({ navigation }) {
  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/libras.jpg")} />
        <HeaderCenterIcon source={require("../../assets/images/icon_OSG.jpg")} />
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      <Card onPress={() => navigation.navigate("Treino", { categoria: "matematica" })}>
        <CardBackground source={require("../../assets/images/Exatas_background.jpg")} />
        <CardText>Matemática</CardText>
      </Card>

      <Card onPress={() => navigation.navigate("Treino", { categoria: "ciencias_natureza" })}>
        <CardBackground source={require("../../assets/images/Humanas_background.jpg")} />
        <CardText>Ciências da Natureza</CardText>
      </Card>

      <Card onPress={() => navigation.navigate("Treino", { categoria: "ciencias_humanas" })}>
        <CardBackground source={require("../../assets/images/Humanas_background.jpg")} />
        <CardText>Ciências Humanas</CardText>
      </Card>

      <Card onPress={() => navigation.navigate("Treino", { categoria: "linguagens" })}>
        <CardBackground source={require("../../assets/images/Humanas_background.jpg")} />
        <CardText>Linguagens</CardText>
      </Card>

      <Card onPress={() => navigation.navigate("Treino", { categoria: "informatica" })}>
        <CardBackground2 source={require("../../assets/images/Exatas_background.jpg")} />
        <CardText2>Informática</CardText2>
      </Card>
    </Container>
  );
}