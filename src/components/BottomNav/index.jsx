import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

export default function BottomNav() {
  const navigation = useNavigation();

  return (
    <Container>
      <BottomMenu>

        <MenuButton onPress={() => navigation.navigate("Menu")}>
          <Ionicons name="home-outline" size={22} color="#fff" />
          <MenuText>Home</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Game")}>
          <Ionicons name="game-controller-outline" size={22} color="#fff" />
          <MenuText>Game</MenuText>
        </MenuButton>

        <CenterButton onPress={() => navigation.navigate("Ranking")}>
          <Ionicons name="trophy" size={28} color="#fff" />
        </CenterButton>

        <MenuButton onPress={() => navigation.navigate("Grupos")}>
          <Ionicons name="grid-outline" size={22} color="#fff" />
          <MenuText>Grupos</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-outline" size={22} color="#fff" />
          <MenuText>Perfil</MenuText>
        </MenuButton>

      </BottomMenu>
    </Container>
  );
}

/* ================== STYLES ================== */

const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const BottomMenu = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: #3a1f54;

  padding: 14px 0;

  border-radius: 20px;

  margin: 15px;
  width: 92%;
`;

const MenuButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const MenuText = styled.Text`
  color: white;
  font-size: 11px;
  margin-top: 3px;
`;

const CenterButton = styled.TouchableOpacity`
  background-color: #6a2cff;

  width: 55px;
  height: 55px;

  border-radius: 28px;

  align-items: center;
  justify-content: center;

  margin-top: -30px;
`;