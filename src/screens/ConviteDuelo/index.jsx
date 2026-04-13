import React, { useEffect } from "react";
import { Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, ImageConstruction, Title, Subtitle } from "./styles";

export default function ConviteDuelo() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.goBack(); 
    }, 5000); 

    return () => clearTimeout(timer); 
  }, []);

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