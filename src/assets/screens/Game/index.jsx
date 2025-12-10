import { Image, TouchableOpacity } from "react-native";
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
import { Ionicons } from "@expo/vector-icons";

export default function Game({ navigation }) {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <OptionText style={{ color: "#C67AFC" }}>Voltar</OptionText>
        </BackButton>
        <Title>Escolha o Modo que deseja jogar</Title>
      </Header>

      {/* 🔥 QUIZ DIÁRIO */}
      <TouchableOpacity onPress={() => navigation.navigate("ThemeSelection")}>
        <GameOption>
          <Image source={require("../../images/quiz_icon.jpg")} />
          <Text>Quiz diário</Text>
        </GameOption>
      </TouchableOpacity>

      {/* 🔥 DUELO ALEATÓRIO */}
      <TouchableOpacity onPress={() => navigation.navigate("ConviteDuelo")}>
        <GameOption>
          <Image source={require("../../images/Humanas_background.jpg")} />
          <Text2>Duelo Aleatório</Text2>
        </GameOption>
      </TouchableOpacity>

      {/* 🔥 DUELO COM AMIGOS */}
      <TouchableOpacity onPress={() => navigation.navigate("DueloAmigo")}>
        <GameOption>
          <Image source={require("../../images/duelo_amigos.jpg")} />
          <Text3>Duelo com Amigos</Text3>
        </GameOption>
      </TouchableOpacity>

      {/* 🔥 TREINO */}
      <TouchableOpacity onPress={() => navigation.navigate("Treino")}>
        <GameOption>
          <Image source={require("../../images/treino_icon.jpg")} />
          <Text>Treino</Text>
        </GameOption>
      </TouchableOpacity>

      {/* BOTTOM MENU */}
      <BottomMenu>

        <MenuButton onPress={() => navigation.navigate("Menu")}>
          <Ionicons name="home-outline" size={20} color="#fff" />
          <MenuText>Home</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Game")}>
          <Ionicons name="game-controller-outline" size={20} color="#fff" />
          <MenuText>Game</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("ChatList")}>
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