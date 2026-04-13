import { ScrollView, Image, ActivityIndicator, Modal, TouchableOpacity } from "react-native";
import { useState } from "react";
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
  MenuItemMensagem,
  MenuItemRanking,
  MenuItemEditar,
  MenuItemConfig,
  MenuItemLogout,
  MenuText,
  Divider,
} from "./styles";

export default function Perfil() {
  const navigation = useNavigation();
  const { usuario, firebaseUser, carregando, logout } = useAuth();

  const [imagemAberta, setImagemAberta] = useState(false);

  const level = usuario?.level || 1;
  const titulo = getTituloLevel(level);

  async function handleLogout() {
    await logout();
  }

  const temTemaValido =
    Array.isArray(usuario?.theme) && usuario.theme.length >= 2;

  if (carregando) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#B84EF2" />
      </Container>
    );
  }

  const imagemPerfil = usuario?.photo
    ? { uri: usuario.photo }
    : require("../../assets/images/profile_photo.jpg");

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* BACKGROUND */}
        {temTemaValido ? (
          <LinearGradient
            colors={usuario.theme}
            style={{ width: "100%", height: 220 }}
          />
        ) : (
          <BackgroundImage
            source={require("../../assets/images/profile_banner.jpg")}
          />
        )}

        {/* VOLTAR */}
        <BackButton onPress={() => navigation.navigate("Menu")}>
          <Ionicons name="arrow-undo" size={22} color="#B84EF2" />
        </BackButton>

        {/* FOTO */}
        <TouchableOpacity onPress={() => setImagemAberta(true)}>
          <ProfileImage source={imagemPerfil} />
        </TouchableOpacity>

        <Name>{usuario?.name || "Usuário"}</Name>

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

        {/* BADGES */}
        <SectionTitle>Conquistas</SectionTitle>
        <BadgesContainer>
          <Badge source={require("../../assets/images/badge1.jpg")} />
          <Badge source={require("../../assets/images/badge2.jpg")} />
          <Badge source={require("../../assets/images/badge3.jpg")} />
          <Badge source={require("../../assets/images/badge1.jpg")} />
          <Badge source={require("../../assets/images/badge2.jpg")} />
        </BadgesContainer>

       <TouchableOpacity onPress={() => navigation.navigate("AjudaDevs")}>
  <PlusCard>
    <PlusText>
      pague um café para os Devs ! {"\n"}Eles também precisam comer!!
    </PlusText>
  </PlusCard>
</TouchableOpacity>

        {/* MENU */}
        <MenuItemMensagem onPress={() => navigation.navigate("ChatList")}>
          <Image source={require("../../assets/images/message_icon.jpg")} style={{ width: 22, height: 22 }} />
          <MenuText>Mensagem</MenuText>
        </MenuItemMensagem>

        <MenuItemRanking onPress={() => navigation.navigate("Ranking")}>
          <Image source={require("../../assets/images/ranking_icon.jpg")} style={{ width: 22, height: 22 }} />
          <MenuText>Ranking</MenuText>
        </MenuItemRanking>

        <MenuItemEditar onPress={() => navigation.navigate("EditarPerfil")}>
          <Image source={require("../../assets/images/edit_icon.jpg")} style={{ width: 22, height: 22 }} />
          <MenuText>Editar Perfil</MenuText>
        </MenuItemEditar>

        <MenuItemConfig>
          <Image source={require("../../assets/images/icon_config1.png")} style={{ width: 22, height: 22 }} />
          <MenuText>Configurações</MenuText>
        </MenuItemConfig>

        <Divider />

        <MenuItemLogout onPress={handleLogout}>
          <Image source={require("../../assets/images/logout_icon.jpg")} style={{ width: 22, height: 22 }} />
          <MenuText>Fazer Logout</MenuText>
        </MenuItemLogout>
      </ScrollView>

      {/* MODAL */}
      <Modal visible={imagemAberta} transparent>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.95)",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setImagemAberta(false)}
        >
          <Image
            source={imagemPerfil}
            style={{
              width: "100%",
              height: "80%",
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
      </Modal>
    </Container>
  );
}
