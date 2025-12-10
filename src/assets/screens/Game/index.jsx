import { Image, ScrollView } from "react-native";
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
import { useNavigation } from "@react-navigation/native";

export default function Game() {
  const navigation = useNavigation();
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <OptionText style={{ color: "#C67AFC" }}>Voltar</OptionText>
        </BackButton>
        <Title>Escolha o Modo que deseja jogar</Title>
      </Header>

      <GameOption onPress={() => navigation.navigate("Treino")}>
        <Image source={require("../../images/quiz_icon.jpg")} />
        <Text>Quiz diário</Text>
      </GameOption>

      <GameOption onPress={() => navigation.navigate("ThemeSelection")}>
        <Image source={require("../../images/Humanas_background.jpg")} />
        <Text2>Duelo Aleatório</Text2>
      </GameOption>

      <GameOption onPress={() => navigation.navigate("ConviteDuelo")}>
        <Image source={require("../../images/duelo_amigos.jpg")} />
        <Text3>Duelo com Amigos</Text3>
      </GameOption>

      <GameOption onPress={() => navigation.navigate("ThemeSelection")}>
        <Image source={require("../../images/treino_icon.jpg")} />
        <Text>Treino</Text>
      </GameOption>

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

        <MenuButton onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-outline" size={20} color="#fff" />
          <MenuText>Perfil</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-outline" size={20} color="#fff" />
          <MenuText>Perfil</MenuText>
        </MenuButton>
      </BottomMenu>
      </ScrollView>
    </Container>
  );
}