import React, { useState } from "react";
import { Text } from "react-native";
import {
  Screen,
  Container,
  Title,
  OptionsBox,
  Option,
  OptionText,
  BottomMenu
} from "./styles";

export default function Game() {
  const [selected, setSelected] = useState(null);

  return (
    <Screen edges={["top", "left", "right"]}>
      <Container>
        <Title>Escolha o jogo</Title>

        <OptionsBox>
          <Option onPress={() => setSelected("Jogo 1")}>
            <OptionText>Jogo 1</OptionText>
          </Option>

          <Option onPress={() => setSelected("Jogo 2")}>
            <OptionText>Jogo 2</OptionText>
          </Option>

          <Option onPress={() => setSelected("Jogo 3")}>
            <OptionText>Jogo 3</OptionText>
          </Option>
        </OptionsBox>

        {selected && (
          <Text style={{ color: "white", marginTop: 20 }}>
            Selecionado: {selected}
          </Text>
        )}
      </Container>

      <BottomMenu>
        <Text style={{ color: "white" }}>Home</Text>
        <Text style={{ color: "white" }}>Jogos</Text>
        <Text style={{ color: "white" }}>Perfil</Text>
      </BottomMenu>
    </Screen>
  );
}
