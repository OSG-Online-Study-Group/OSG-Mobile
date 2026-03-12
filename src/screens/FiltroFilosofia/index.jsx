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

export default function FiltroFilosofia() {
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
        <BannerTitle>Filosofia</BannerTitle>
      </Banner>

      {/* LISTA */}
      <OptionButton>
        <OptionText>Metafísica</OptionText>
        <Ionicons name="aperture-outline" size={35} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Epistemologia</OptionText>
        <Ionicons name="logo-react" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Ética</OptionText>
        <Ionicons name="body-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Idealismo</OptionText>
        <Ionicons name="checkmark-circle-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Existencialismo</OptionText>
        <Ionicons name="flame-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Empirismo</OptionText>
        <Ionicons name="people-outline" size={40} color="#000" />
      </OptionButton>

    </Container>
  );
}
