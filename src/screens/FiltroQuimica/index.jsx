import React from "react";
import {
  Container,
  Header,
  Logo,
  HeaderCenterIcon,
  BackButton,
  OptionText,
  Banner,
  BannerTitle,
  OptionButton
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function FiltroQuimica({ navigation }) {
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
        <BannerTitle>Química</BannerTitle>
      </Banner>

      {/* LISTA */}
       <TouchableOpacity onPress={() => navigation.navigate("QuimicaOrganica")}>
      <OptionButton>
        <OptionText>Química Orgânica</OptionText>
        <Ionicons name="flask-outline" size={35} color="#000" />
      </OptionButton>
        </TouchableOpacity>
      <OptionButton>
        <OptionText>Química Inorgânica</OptionText>
        <Ionicons name="eyedrop-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Físico-Química</OptionText>
        <Ionicons name="git-branch-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Química Analítica</OptionText>
        <Ionicons name="clipboard-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Química Forense</OptionText>
        <Ionicons name="finger-print-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Química Ambiental</OptionText>
        <Ionicons name="leaf-outline" size={40} color="#000" />
      </OptionButton>

    </Container>
  );
}
