import { ScrollView, Image, ActivityIndicator } from "react-native";
import { useAuth } from '../../hooks/useAuth';
import { getTituloLevel } from '../../services/firestore';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

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
  const { usuario, firebaseUser, carregando, logout } = useAuth();

  const level = usuario?.level || 1;
  const titulo = getTituloLevel(level);

  async function handleLogout() {
    await logout();
  }

  // 🔥 PROTEÇÃO DO GRADIENT (evita crash)
  const temTemaValido =
    Array.isArray(usuario?.theme) && usuario.theme.length >= 2;

  if (carregando) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#B84EF2" />
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* 🔥 BACKGROUND DINÂMICO */}
        {temTemaValido ? (
          <LinearGradient
            colors={usuario.theme}
            style={{ width: "100%", height: 220 }}
          />
        ) : (
          <BackgroundImage source={require("../../assets/images/profile_banner.jpg")} />
        )}

        {/* BOTÃO VOLTAR */}
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-undo" size={22} color="#B84EF2" />
        </BackButton>

        {/* 🔥 FOTO DINÂMICA */}
        <ProfileImage
          source={
            usuario?.photo
              ? { uri: usuario.photo }
              : require("../../assets/images/profile_photo.jpg")
          }
        />

        <Name>{usuario?.name || "Usuário"}</Name>

        <Username>
          @{usuario?.name?.toLowerCase() || firebaseUser?.email}
        </Username>

        {/* XP */}
        <PointsCard>
          <PointsText>
            {usuario?.xp || 0} XP — {titulo}
          </PointsText>
        </PointsCard>

        {/* STATS */}
        <StatsContainer>
          <Stat>
            <StatNumber>{usuario?.groupIds?.length || 0}</StatNumber>
            <StatLabel>Grupos</StatLabel>
          </Stat>

          <Stat>
            <StatNumber>{usuario?.xp || 0}</StatNumber>
            <StatLabel>XP</StatLabel>
          </Stat>

          <Stat>
            <StatNumber>{level}</StatNumber>
            <StatLabel>{titulo}</StatLabel>
          </Stat>
        </StatsContainer>

        {/* BADGES (mantido como você pediu) */}
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
            Obter Plus? Ganhe o dobro de XP e mais recompensas
          </PlusText>
        </PlusCard>

        {/* MENU (mantido) */}
        <MenuItem onPress={() => navigation.navigate("ChatList")}>
          <Image source={require("../../assets/images/message_icon.jpg")} />
          <MenuText>Mensagem</MenuText>
        </MenuItem>

        <MenuItem onPress={() => navigation.navigate("Ranking")}>
          <Image source={require("../../assets/images/ranking_icon.jpg")} />
          <MenuText>Ranking</MenuText>
        </MenuItem>

        {/* 🔥 CORREÇÃO AQUI */}
        <MenuItem onPress={() => navigation.navigate("Editar_Perfil")}>
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