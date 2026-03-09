import React from "react";
import {
  Container,
  Header,
  Logo,
  HeaderCenterIcon,
  BackButton,
  BackText,
  Banner,
  BannerImage,
  BannerTitle,
  BannerIcon,
  OptionButton,
  OptionText,
  OptionIcon
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function FiltroMatematica({ navigation }) {
  return (
    <Container>

      {/* HEADER */}
      <Header>
        <Logo source={require("../../images/libras.jpg")} />

        <HeaderCenterIcon
          source={require("../../images/icon_OSG.jpg")}
        />

        <BackButton onPress={() => navigation.goBack()}>
          <OptionText style={{ color: "#C67AFC" }}>Voltar</OptionText>
        </BackButton>
      </Header>

      {/* BANNER */}
      <Banner>
        <BannerTitle>Matemática</BannerTitle>
      </Banner>

      {/* LISTA */}
      <OptionButton>
        <OptionText>Aritmética</OptionText>
        <Ionicons name="pencil-outline" size={30} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Cálculo</OptionText>
        <Ionicons name="calculator-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Álgebra</OptionText>
        <Ionicons name="bar-chart-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Geometria</OptionText>
        <Ionicons name="prism-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Trigonometria</OptionText>
        <Ionicons name="shapes-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Estatística e Probabilidade</OptionText>
        <Ionicons name="dice-outline" size={40} color="#000" />
      </OptionButton>

    </Container>
  );
}
