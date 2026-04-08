import { ScrollView, TouchableOpacity, Image, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  Container,
  Header,
  Title,
  SearchContainer,
  SearchInput,
  Banner,
  SectionTitle,
  InfoCard,
  CardImage,
  ProfileRow,
  ProfileImage,
  ProfileInfo,
  Name,
  Username,
  StatsRow,
  StatBox,
  StatLabel,
  StatValue,
} from "./styles";

import BottomNav from "../../components/BottomNav";

export default function Menu({ navigation }) {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* 🔥 HEADER */}
        <Header>
          <Ionicons name="" size={24} color="#D36DF3" />

          <Title>OSG</Title>

          {/* espaço vazio para balancear */}
          <View style={{ width: 24 }} />
        </Header>

        {/* 🔍 SEARCH */}
        <SearchContainer>
          <Ionicons name="search" size={16} color="#A086CC" />
          <SearchInput placeholder="Pesquisar" placeholderTextColor="#A086CC" />
        </SearchContainer>

        {/* 🔥 BANNER COM SETAS */}
        <View style={{ alignItems: "center", marginTop: 15 }}>
          
          <TouchableOpacity style={{ position: "absolute", left: 20, top: "40%", zIndex: 1 }}>
            <Ionicons name="" size={28} color="#fff" />
          </TouchableOpacity>

          <Banner source={require("../../assets/images/banner.jpg")} />

          <TouchableOpacity style={{ position: "absolute", right: 20, top: "40%", zIndex: 1 }}>
            <Ionicons name="" size={28} color="#fff" />
          </TouchableOpacity>

        </View>

        {/* 🔥 TÍTULO */}
        <SectionTitle>Suas Informações</SectionTitle>

        {/* 🔥 CARD */}
        <InfoCard colors={["#6A11CB", "#FF4ECD"]}>
          
          <CardImage source={require("../../assets/images/profile_banner.jpg")} />

          <ProfileRow>
            <ProfileImage source={require("../../assets/images/profile_photo.jpg")} />

            <ProfileInfo>
              <Name>Poker Ghost</Name>
              <Username>@poker_ghost321</Username>
            </ProfileInfo>
          </ProfileRow>

          {/* STATS */}
          <StatsRow>
            <StatBox>
              <StatLabel>Duelos Vencidos</StatLabel>
              <StatValue>77</StatValue>
            </StatBox>

            <StatBox>
              <StatLabel>Matérias Incluídas</StatLabel>
              <StatValue>2</StatValue>
            </StatBox>

          <StatBox>
              <StatLabel>Posição no  Ranking</StatLabel>
              <StatValue>3°</StatValue>
            </StatBox>
          </StatsRow>
        </InfoCard>

      </ScrollView>

      <BottomNav />
    </Container>
  );
}