import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Logo,
  HeaderCenterIcon,
  BackButton,
  BackText,
  Card,
  CardBackground,
  CardText,
  CardBackground2,
  CardBackground3,
  CardText2,
  CardText3
} from "./styles";

export default function FiltroEstudo({ navigation }) {
  return (
    <Container>

      {/* ===== HEADER ===== */}
      <Header>
        <Logo source={require("../../assets/images/libras.jpg")} />

        <HeaderCenterIcon
          source={require("../../assets/images/icon_OSG.jpg")}
        />

        {/* 🔙 Botão Voltar */}
      
          <BackButton onPress={() => navigation.goBack()}> 
            <BackText>Voltar</BackText>
          </BackButton>
      </Header>

      {/* ===== CARD EXATAS ===== */}
     <Card onPress={() => navigation.navigate("FiltroExatas")}>
      <CardBackground
            source={require("../../assets/images/Exatas_background.jpg")}
          />
          <CardText>Exatas</CardText>
        </Card>


      {/* ===== CARD HUMANAS ===== */}
    <Card onPress={() => navigation.navigate("FiltroHumanas")}>
          <CardBackground
            source={require("../../assets/images/Humanas_background.jpg")}
          />
          <CardText>Humanas</CardText>
        </Card>

      {/* ===== CARD EXTRAS ===== */}
   <Card onPress={() => navigation.navigate("FiltroExatas")}>
          <CardBackground2
            source={require("../../assets/images/Extras.jpg")}
          />
          <CardText2>Extras</CardText2>
          </Card>

      {/* ===== CARD COMUNIDADE ===== */}
      <TouchableOpacity onPress={() => navigation.navigate("CommunityScreen")}>
        <Card>
          <CardBackground3
            source={require("../../assets/images/comunidade.jpg")}
          />
          <CardText3>Comunidade</CardText3>
        </Card>
      </TouchableOpacity>

    </Container>
  );
}
