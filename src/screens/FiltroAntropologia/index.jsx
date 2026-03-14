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

export default function FiltroAntropologia({ navigation }) {
  return (
    <Container>

      {/* HEADER */}
      <Header>
        <Logo source={require("../../assets/images/libras.jpg")} />

        <HeaderCenterIcon
          source={require("../../assets/images/icon_OSG.jpg")}
        />

        <BackButton onPress={() => navigation.goBack()}>
          <OptionText style={{ color: "#C67AFC" }}>Voltar</OptionText>
        </BackButton>
      </Header>

      {/* BANNER */}
      <Banner>
        <BannerTitle>Antropologia</BannerTitle>
      </Banner>

      {/* LISTA */}
      <OptionButton>
        <OptionText>Urbana</OptionText>
        <Ionicons name="business-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Cultural</OptionText>
        <Ionicons name="earth-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Linguística</OptionText>
        <Ionicons name="create-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Biológica</OptionText>
        <Ionicons name="skull-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Física</OptionText>
        <Ionicons name="magnet-outline" size={40} color="#000" />
      </OptionButton>

    </Container>
  );
}
