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
          <BackButton onPress={() => navigation.navigate("Menu")}>
            <OptionText style={{ color: "#C67AFC" }}>Voltar</OptionText>
          </BackButton>
          <Title>Escolha o Modo que deseja jogar</Title>
        </Header>

        <GameOption onPress={() => navigation.navigate("QuizDiario")}>
          <Image source={require("../../assets/images/quiz_icon.jpg")} />
          <Text>Quiz diário</Text>
        </GameOption>

        <GameOption onPress={() => navigation.navigate("DueloAleatorio")}>
          <Image source={require("../../assets/images/icon_versus.jpg")} />
          <Text2>Duelo Aleatório</Text2>
        </GameOption>

        <GameOption onPress={() => navigation.navigate("ConviteDuelo")}>
          <Image source={require("../../assets/images/icon duelo amigo.png")} />
          <Text3>Duelo Amigo</Text3>
        </GameOption>

        <GameOption onPress={() => navigation.navigate("FiltroTreino")}>
          <Image source={require("../../assets/images/icon treino.png")} />
          <Text>Treino</Text>
        </GameOption>
      </ScrollView>
    </Container>
  );
}
