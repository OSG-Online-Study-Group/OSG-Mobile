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

export default function FiltroInformatica({ navigation }) {
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
        <BannerTitle>Informática</BannerTitle>
      </Banner>

      {/* LISTA */}
      <OptionButton>
        <OptionText>Desenvolvimento de Software</OptionText>
        <Ionicons name="logo-html5" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Administração de Redes</OptionText>
        <Ionicons name="globe-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Banco de Dados</OptionText>
        <Ionicons name="logo-apple-ar" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Cloud Computing</OptionText>
        <Ionicons name="cloud-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>IOT</OptionText>
        <Ionicons name="qr-code-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Blockchain</OptionText>
        <Ionicons name="hardware-chip-outline" size={40} color="#000" />
      </OptionButton>

    </Container>
  );
}
