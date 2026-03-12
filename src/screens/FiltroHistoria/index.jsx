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

export default function FiltroHistoria() {
  return (
    <Container>

      {/* HEADER */}
      <Header>
        <Logo source={require("../../assets/images/libras.jpg")} />

        <HeaderCenterIcon
          source={require("../../assets/images/icon_OSG.jpg")}
        />

        <BackButton>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      {/* BANNER */}
      <Banner>
        <BannerTitle>História</BannerTitle>
      </Banner>

      {/* LISTA */}
      <OptionButton>
        <OptionText>Política</OptionText>
        <Ionicons name="medal-outline" size={35} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Social</OptionText>
        <Ionicons name="people-circle-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Cultural</OptionText>
        <Ionicons name="book-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Economia</OptionText>
        <Ionicons name="cash-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Militar</OptionText>
        <Ionicons name="man-outline" size={40} color="#000" />
      </OptionButton>

    </Container>
  );
}
