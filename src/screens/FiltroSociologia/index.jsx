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

export default function FiltroSociologia({ navigation }) {
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
        <BannerTitle>Sociologia</BannerTitle>
      </Banner>

      {/* LISTA */}
      <OptionButton>
        <OptionText>Funcionalismo</OptionText>
        <Ionicons name="settings-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Religião</OptionText>
        <Ionicons name="accessibility-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Educação</OptionText>
        <Ionicons name="school-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Família e Gênero</OptionText>
        <Ionicons name="people-outline" size={40} color="#000" />
      </OptionButton>

    </Container>
  );
}
