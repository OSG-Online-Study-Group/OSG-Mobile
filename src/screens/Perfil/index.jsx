import { ScrollView, Image, ActivityIndicator } from "react-native";
import { useAuth } from '../../hooks/useAuth';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
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

export default function Perfil() {
  const navigation = useNavigation();

  const {
    usuario,
    firebaseUser,
    carregando,
    logout
  } = useAuth();

  async function handleLogout() {
    await logout();
  }

  if (carregando) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#B84EF2" />
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView // permite rolar a tela caso o conteúdo seja maior que a altura disponível
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <BackgroundImage source={require("../../assets/images/profile_banner.jpg")} />

        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-undo" size={22} color="#B84EF2" />
        </BackButton>

        {/* <ProfileImage // codigo para carregar a foto do usuário, caso exista, ou uma imagem padrão
          source={
            usuario?.photo
              ? { uri: usuario.photo }
              : require("../../assets/images/profile_photo.jpg")
          }
        /> */}

        <ProfileImage source={require("../../assets/images/profile_photo.jpg")} />

        <Name>{usuario?.name || "Usuário"}</Name>


        <Username>
          @{usuario?.name?.toLowerCase() || firebaseUser?.email}
        </Username>

        <PointsCard>
          <PointsText>
            Pontos: {usuario?.points ?? usuario?.xp ?? 0}
          </PointsText>
        </PointsCard>

        <StatsContainer>
          <Stat>
            <StatNumber>{usuario?.groupIds?.length || 0}</StatNumber>
            <StatLabel>Matérias</StatLabel>
          </Stat>

          <Stat>
            <StatNumber>{usuario?.xp || 0}</StatNumber>
            <StatLabel>XP</StatLabel>
          </Stat>

          <Stat>
            <StatNumber>{usuario?.level || 1}</StatNumber>
            <StatLabel>Nível</StatLabel>
          </Stat>
        </StatsContainer>

        <SectionTitle>Conquistas</SectionTitle>
        <BadgesContainer>
          <Badge source={require("../../assets/images/badge1.jpg")} />
          <Badge source={require("../../assets/images/badge2.jpg")} />
          <Badge source={require("../../assets/images/badge3.jpg")} />
          <Badge source={require("../../assets/images/badge1.jpg")} />
          <Badge source={require("../../assets/images/badge2.jpg")} />
        </BadgesContainer>

        <PlusCard>
          <PlusText>
            Obter Plus? Ganhe o dobro de xp e mais recompensas
          </PlusText>
        </PlusCard>

        <MenuItem onPress={() => navigation.navigate("ChatList")}>
          <Image source={require("../../assets/images/message_icon.jpg")} />
          <MenuText>Mensagem</MenuText>
        </MenuItem>

        <MenuItem onPress={() => navigation.navigate("Ranking")}>
          <Image source={require("../../assets/images/ranking_icon.jpg")} />
          <MenuText>Ranking</MenuText>
        </MenuItem>

        <MenuItem>
          <Image source={require("../../assets/images/edit_icon.jpg")} />
          <MenuText>Editar Perfil</MenuText>
        </MenuItem>


        <MenuItem>
          <Image source={require("../../assets/images/language_icon.jpg")} />
          <MenuText>Idioma</MenuText>
        </MenuItem>

        <MenuItem>
          <Image source={require("../../assets/images/security_icon.jpg")} />
          <MenuText>Configurações de Segurança</MenuText>
        </MenuItem>

        <MenuItem>
          <Image source={require("../../assets/images/help_icon.jpg")} />
          <MenuText>Ajuda e Suporte</MenuText>
        </MenuItem>



        <Divider />

        <MenuItem onPress={handleLogout}>
          <Image source={require("../../assets/images/logout_icon.jpg")} />
          <MenuText>Fazer Logout</MenuText>
        </MenuItem>
      </ScrollView>
    </Container>
  );
}