import React from "react";
import { Image, Text } from "react-native";
import { Container, ImageConstruction, Title, Subtitle } from "./styles";

export default function ConviteDuelo() {
  return (
    <Container>
      <ImageConstruction
        source={require("../../assets/images/construcao.png")}
      />

      <Title>🚧 Carregando melhorias...</Title>

      <Subtitle>99% de paciência necessária.</Subtitle>
    </Container>
  );
}