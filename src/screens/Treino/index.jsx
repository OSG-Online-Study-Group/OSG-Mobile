import React from "react";
import { ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTreino } from "../../hooks/useTreino";
import {
  Container, Header, Title,
  BackButton, BackText, QuestionCard, QuestionIcon,
  QuestionTitle, QuestionText, OptionButton, OptionText,
  StatusBox, StatusText, BottomMenu, CenterButton, MenuButton, MenuText,
  ContentScroll
} from "./styles";

export default function Treino({ route, navigation }) {
  const { categoria } = route.params;
  const {
    pergunta, carregando, respondido,
    selectedIndex, xpTotal, config,
    responder, getOptionColor,
  } = useTreino(categoria);

  return (
    <Container>
      <Header>
        <Title>Treino {config.label}</Title>

        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      <ContentScroll contentContainerStyle={{ paddingBottom: 120 }}>
        <QuestionCard>
          <QuestionIcon source={require("../../assets/images/espada.jpg")} />
          <QuestionTitle>Modo {config.label}</QuestionTitle>
          <QuestionText>
            {xpTotal > 0
              ? `+${xpTotal} XP ganhos nessa sessão!`
              : "Responda e ganhe XP!"}
          </QuestionText>
        </QuestionCard>

        {carregando ? (
          <ActivityIndicator color="#B84EF2" style={{ marginTop: 40 }} />
        ) : (
          <>
            {/* PERGUNTA */}
            <QuestionCard style={{ marginTop: 8 }}>
              <QuestionText style={{ fontSize: 16, textAlign: "center" }}>
                {pergunta?.pergunta}
              </QuestionText>
            </QuestionCard>

            {/* ALTERNATIVAS */}
            {pergunta?.alternativas.map((alt, index) => (
              <OptionButton
                key={index}
                background={getOptionColor(index)}
                onPress={() => responder(index)}
                disabled={respondido}
              >
                <OptionText>
                  {`${String.fromCharCode(65 + index)}. ${alt}`}
                </OptionText>
              </OptionButton>
            ))}

            {/* FEEDBACK */}
            <StatusBox>
              {respondido ? (
                <StatusText>
                  {selectedIndex === pergunta?.correta
                    ? `✅ Correto! +${10} XP`
                    : `❌ Incorreto. A resposta era ${String.fromCharCode(
                        65 + pergunta?.correta
                      )}.`}
                  {"\n"}Próxima pergunta em instantes...
                </StatusText>
              ) : (
                <StatusText>Escolha uma alternativa.</StatusText>
              )}
            </StatusBox>
          </>
        )}
      </ContentScroll>

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