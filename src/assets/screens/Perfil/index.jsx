import { ScrollView, Image } from "react-native";
import {
  Container,
  Header,
  BackButton,
  BackgroundImage,
  ProfileImage,
  Name,
  Username,
  PointsCard,
  PointsText,
  StatsContainer,
  Stat,
  StatNumber,
  StatLabel,
  SectionTitle,
  BadgesContainer,
  Badge,
  PlusCard,
  PlusText,
  MenuItem,
  MenuText,
  Divider,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {
  const navigation = useNavigation();
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackgroundImage source={require("../../images/profile_banner.jpg")} />

        <BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-undo" size={22} color="#B84EF2" />
        </BackButton>

        <ProfileImage source={require("../../images/profile_photo.jpg")} />
        <Name>Poker Ghost</Name>
        <Username>@poker_ghost321</Username>

        <PointsCard>
          <PointsText>Pontos: 777.777</PointsText>
        </PointsCard>

        <StatsContainer>
          <Stat>
            <StatNumber>5</StatNumber>
            <StatLabel>Matérias</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>1,921</StatNumber>
            <StatLabel>Últimos Pontos</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>12</StatNumber>
            <StatLabel>Amigos</StatLabel>
          </Stat>
        </StatsContainer>

        <SectionTitle>Conquistas</SectionTitle>
        <BadgesContainer>
          <Badge source={require("../../images/badge1.jpg")} />
          <Badge source={require("../../images/badge2.jpg")} />
          <Badge source={require("../../images/badge3.jpg")} />
          <Badge source={require("../../images/badge1.jpg")} />
          <Badge source={require("../../images/badge2.jpg")} />
        </BadgesContainer>

        <PlusCard>
          <PlusText>Obter Plus? Ganhe o dobro de xp e mais recompensas</PlusText>
        </PlusCard>

        <MenuItem onPress={() => navigation.navigate("ChatList")}>
          <Image source={require("../../images/message_icon.jpg")} />
          <MenuText>Mensagem</MenuText>
        </MenuItem>

        <MenuItem onPress={() => navigation.navigate("FiltroRanking")}>
          <Image source={require("../../images/ranking_icon.jpg")} />
          <MenuText>Ranking</MenuText>
        </MenuItem>

        <MenuItem>
          <Image source={require("../../images/edit_icon.jpg")} />
          <MenuText>Editar Perfil</MenuText>
        </MenuItem>

        <Divider />

        <MenuItem>
          <Image source={require("../../images/language_icon.jpg")} />
          <MenuText>Idioma</MenuText>
        </MenuItem>

        <MenuItem>
          <Image source={require("../../images/security_icon.jpg")} />
          <MenuText>Configurações de Segurança</MenuText>
        </MenuItem>

        <MenuItem>
          <Image source={require("../../images/help_icon.jpg")} />
          <MenuText>Ajuda e Suporte</MenuText>
        </MenuItem>

        <MenuItem onPress={() => navigation.navigate("Home")}>
          <Image source={require("../../images/logout_icon.jpg")} />
          <MenuText>Fazer Logout</MenuText>
        </MenuItem>
      </ScrollView>
    </Container>
  );
}
