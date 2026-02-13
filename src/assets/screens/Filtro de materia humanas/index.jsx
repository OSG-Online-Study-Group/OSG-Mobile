import React from "react";
import {
  Container,
  Header,
  Logo,
  HeaderCenterIcon,
  BackButton,
  BackText,
  Banner,
  BannerBackground,
  BannerText,
  OptionButton,
  OptionText
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function FiltroHumanas({ navigation }) {
  return (
    <Container>

      {/* ===== HEADER ===== */}
      <Header>
        <Logo source={require("../../images/libras.jpg")} />

        <HeaderCenterIcon
          source={require("../../images/icon_OSG.jpg")}
        />

         <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      {/* ===== BANNER HUMANAS ===== */}
      <Banner>
        <BannerBackground
          source={require("../../images/Humanas_background.jpg")}
        />
        <BannerText>Humanas</BannerText>
      </Banner>

      {/* ===== OPÇÕES DE MATÉRIA ===== */}
      <TouchableOpacity onPress={() => navigation.navigate("FiltroHistoria")}>
        <OptionButton>
          <OptionText>História</OptionText>
          <Ionicons name="earth-outline" size={40} color="#000" />
        </OptionButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("FiltroFilosofia")}>
        <OptionButton>
          <OptionText>Filosofia</OptionText>
          <Ionicons name="leaf-outline" size={40} color="#000" />
        </OptionButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("FiltroSociologia")}>
        <OptionButton>
          <OptionText>Sociologia</OptionText>
          <Ionicons name="people-outline" size={40} color="#000" />
        </OptionButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("FiltroAntropologia")}>
        <OptionButton>
          <OptionText>Antropologia</OptionText>
          <Ionicons name="accessibility-outline" size={40} color="#000" />
        </OptionButton>
      </TouchableOpacity>

    </Container>
  );
}
