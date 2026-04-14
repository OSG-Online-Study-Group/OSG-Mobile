import React from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import BottomNav from "../../components/BottomNav";
import { useMenuStats } from "../../hooks/useMenuStats";
import { useDuelosPendentes } from "../../hooks/useDuelo";
import {
  Container, Header, Title,
  SearchContainer, SearchInput, Banner, SectionTitle,
  BadgeWrapper, BadgeCount, BadgeText,
  ProfileBanner, ProfilePhoto, UserName,
  StatsRow, StatCard, StatLabel, StatValue,
} from "./styles";

export default function Menu({ navigation }) {
  const { total } = useDuelosPendentes();
  const { usuario, loading, vitorias, melhorMateria, posicao } = useMenuStats();

  const temTheme = Array.isArray(usuario?.theme) && usuario.theme.length >= 2;
  const gradientColors = temTheme ? usuario.theme : ["#7B2FF7", "#2C0E5A"];

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <Header>
          <Ionicons name="menu-outline" size={24} color="#D36DF3" />
          <Title>OSG</Title>

          {/* Badge de duelos pendentes */}
          <BadgeWrapper onPress={() => navigation.navigate("DuelosPendentes")}>
            <Ionicons name="game-controller" size={24} color="#B84EF2" />
            {total > 0 && (
              <BadgeCount>
                <BadgeText>{total}</BadgeText>
              </BadgeCount>
            )}
          </BadgeWrapper>
        </Header>

        {/* BUSCA */}
        <SearchContainer>
          <Ionicons name="search" size={16} color="#A086CC" />
          <SearchInput placeholder="Pesquisar" placeholderTextColor="#A086CC" />
        </SearchContainer>

        {/* BANNER */}
        <Banner source={require("../../assets/images/banner.jpg")} />

        <SectionTitle>Suas Estatísticas</SectionTitle>

        {loading ? (
          <ActivityIndicator color="#B84EF2" style={{ marginTop: 20 }} />
        ) : (
          <LinearGradient
            colors={gradientColors}
            style={{ margin: 15, borderRadius: 20, overflow: "hidden", alignItems: "center", paddingBottom: 20 }}
          >
            {!temTheme && (
              <ProfileBanner
                source={require("../../assets/images/profile_banner.jpg")}
              />
            )}

            <ProfilePhoto
              source={
                usuario?.photo
                  ? { uri: usuario.photo }
                  : require("../../assets/images/profile_photo.jpg")
              }
            />

            <UserName>{usuario?.name || "Usuário"}</UserName>

            <StatsRow>
              <StatCard>
                <StatLabel>Vitórias</StatLabel>
                <StatValue>{vitorias}</StatValue>
              </StatCard>

              <StatCard>
                <StatLabel>Ranking</StatLabel>
                <StatValue>{posicao ? `${posicao}°` : "-"}</StatValue>
              </StatCard>

              <StatCard>
                <StatLabel>Matéria Top</StatLabel>
                <StatValue small>{melhorMateria}</StatValue>
              </StatCard>
            </StatsRow>
          </LinearGradient>
        )}

      </ScrollView>

      <BottomNav />
    </Container>
  );
}