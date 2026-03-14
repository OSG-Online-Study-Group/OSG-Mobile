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

export default function FiltroAstronomia({ navigation }) {
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
        <BannerTitle>Astronomia</BannerTitle>
      </Banner>

      {/* LISTA */}
      <OptionButton>
        <OptionText>Astrofísica</OptionText>
        <Ionicons name="logo-electron" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Cosmologia</OptionText>
        <Ionicons name="logo-tableau" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Astrobiologia</OptionText>
        <Ionicons name="beaker-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Astronomia Planetária</OptionText>
        <Ionicons name="planet-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Radioastronomia</OptionText>
        <Ionicons name="volume-high-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Astronomia Óptica</OptionText>
        <Ionicons name="telescope-outline" size={40} color="#000" />
      </OptionButton>

    </Container>
  );
}
