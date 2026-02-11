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

export default function FiltroExatas({ navigation }) {
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

      {/* ===== BANNER EXATAS ===== */}
      <Banner>
        <BannerBackground
          source={require("../../images/Exatas_background.jpg")}
        />
        <BannerText>Exatas</BannerText>
      </Banner>

      {/* ===== OPÇÕES DE MATÉRIA ===== */}
      <TouchableOpacity onPress={() => navigation.navigate("FiltroMatematica")}>
        <OptionButton>
          <OptionText>Matemática</OptionText>
          <Ionicons name="calculator-outline" size={40} color="#000" />
        </OptionButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Treino")}>
        <OptionButton>
          <OptionText>Química</OptionText>
          <Ionicons name="flask-outline" size={40} color="#000" />
        </OptionButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("FiltroAstronomia")}>
        <OptionButton>
          <OptionText>Astronomia</OptionText>
          <Ionicons name="telescope-outline" size={40} color="#000" />
        </OptionButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("FiltroInformatica")}>
        <OptionButton>
          <OptionText>Informática</OptionText>
          <Ionicons name="desktop-outline" size={40} color="#000" />
        </OptionButton>
      </TouchableOpacity>

    </Container>
  );
}
