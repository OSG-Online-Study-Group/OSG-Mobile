import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Container,
  Header,
  BackButton,
  Title,
  GameOption,
  OptionText,
  BottomMenu,
  MenuButton,
  MenuText,
  Text,
  Text2,
  Text3,
} from "./styles";

export default function ThemeSelection({ navigation }) {
  return (
    <Container>
      {/* ===== HEADER ===== */}
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <OptionText style={{ color: "#C67AFC" }}>Voltar</OptionText>
        </BackButton>
        <Title>Escolha o Tema</Title>
      </Header>

      {/* ===== OPÇÕES DE TEMAS ===== */}
      <GameOption onPress={() => navigation.navigate("Treino_Exatas")}>
        <Text>Exatas</Text>
      </GameOption>

      <GameOption onPress={() => navigation.navigate("Treino_Humanas")}>
        <Text2>Humanas</Text2>
      </GameOption>

      <GameOption onPress={() => navigation.navigate("Treino_Extras")}>
        <Text3>Extras</Text3>
      </GameOption>

      {/* ===== MENU INFERIOR ===== */}
      <BottomMenu>
        <MenuButton onPress={() => navigation.navigate("Menu")}>
          <Ionicons name="home-outline" size={20} color="#fff" />
          <MenuText>Home</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Game")}>
          <Ionicons name="game-controller-outline" size={20} color="#fff" />
          <MenuText>Game</MenuText>
        </MenuButton>

        <MenuButton active>
          <Ionicons name="chatbubble-ellipses" size={22} color="#fff" />
          <MenuText>Grupos</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("FiltroEstudo")}>
          <Ionicons name="book-outline" size={20} color="#fff" />
          <MenuText>Matérias</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-outline" size={20} color="#fff" />
          <MenuText>Perfil</MenuText>
        </MenuButton>
      </BottomMenu>
    </Container>
  );
}
