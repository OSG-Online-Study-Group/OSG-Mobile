import React, { useState } from "react";
import {
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRankingGeral, useRankingTodosGrupos } from "../../hooks/useRanking";

import {
  Container,
  Header,
  LeftHeader,
  Logo,
  BackButton,
  BackText,
  Title,
  Card,
  IconCircle,
  CardIcon,
  CardText,
  TextContainer,
  Points,
  Crown,
  ListCard,
  Avatar,
  Username,
  TopBox,
  TopUsers,
  TopUser,
  AvatarTop,
  UsernameTop,
  PointsTop,
  SubTitle
} from "./styles";

const DEFAULT_AVATAR = require("../../assets/images/profile_photo.jpg");

const GROUP_IMAGES = {
  matematica: require("../../assets/images/algebra.jpg"),
  ciencias_natureza: require("../../assets/images/quimica_organica.jpg"),
  linguagens: require("../../assets/images/economia.jpg"),
  ciencias_humanas: require("../../assets/images/algebra.jpg"),
  informatica: require("../../assets/images/quimica_forense.jpg"),
};

// ───────────── RANKING DE PESSOAS ─────────────
function RankingPessoas() {
  const { usuarios, carregando } = useRankingGeral();

  if (carregando) {
    return <ActivityIndicator color="#B84EF2" style={{ marginTop: 20 }} />;
  }

  const top3 = usuarios.slice(0, 3);
  const resto = usuarios.slice(3);

  // ordem do pódio (2º, 1º, 3º)
  const podio = [top3[1], top3[0], top3[2]];

  return (
    <>
      <TopBox>
        <SubTitle>Top jogadores do app</SubTitle>

        <TopUsers>
          {podio.map((user, index) =>
            user ? (
              <TopUser key={user.id}>
                {index === 1 && (
                  <Crown source={require("../../assets/images/crown.png")} />
                )}

                {/* FOTO DINÂMICA */}
                <AvatarTop
                  source={
                    user?.photo && user.photo.startsWith("http")
                      ? { uri: user.photo }
                      : DEFAULT_AVATAR
                  }
                />

                <UsernameTop>{user.name}</UsernameTop>
                <PointsTop>{user.xp} XP</PointsTop>
              </TopUser>
            ) : (
              <TopUser key={index} />
            )
          )}
        </TopUsers>
      </TopBox>

      {/* LISTA */}
      <FlatList
        data={resto}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ListCard>
            {/* FOTO DINÂMICA */}
            <Avatar
              source={
                item?.photo && item.photo.startsWith("http")
                  ? { uri: item.photo }
                  : DEFAULT_AVATAR
              }
            />

            <Username>{index + 4}. {item.name}</Username>

            {/* XP MANTIDO NORMAL */}
            <Points>{item.xp} XP</Points>
          </ListCard>
        )}
      />
    </>
  );
}

// ───────────── RANKING DE GRUPOS ─────────────
function RankingGruposLista() {
  const { grupos, carregando } = useRankingTodosGrupos();

  if (carregando) {
    return <ActivityIndicator color="#B84EF2" style={{ marginTop: 20 }} />;
  }

  return (
    <FlatList
      data={grupos}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <Card>
          <IconCircle>
            {index === 0 && (
              <Crown source={require("../../assets/images/crown.png")} />
            )}

            <CardIcon
              source={GROUP_IMAGES[item.subject] || DEFAULT_AVATAR}
            />
          </IconCircle>

          <TextContainer>
            <CardText>{item.name}</CardText>
            <Points>{item.totalXP} XP</Points>
          </TextContainer>
        </Card>
      )}
    />
  );
}

// ───────────── COMPONENTE PRINCIPAL ─────────────
export default function Ranking() {
  const navigation = useNavigation();
  const [modo, setModo] = useState("pessoas");

  return (
    <Container>
      <Header>
        <LeftHeader>
          <Image
            source={require("../../assets/images/libras.jpg")}
            style={{ width: 40, height: 40 }}
          />
          <Logo source={require("../../assets/images/icon_OSG.jpg")} />
        </LeftHeader>

        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      <Title>Ranking</Title>

      {/* TOGGLE */}
      <View style={styles.toggle}>
        <TouchableOpacity
          style={[styles.toggleBtn, modo === "pessoas" && styles.toggleAtivo]}
          onPress={() => setModo("pessoas")}
        >
          <Text
            style={[
              styles.toggleText,
              modo === "pessoas" && styles.toggleTextAtivo
            ]}
          >
            Pessoas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.toggleBtn, modo === "grupos" && styles.toggleAtivo]}
          onPress={() => setModo("grupos")}
        >
          <Text
            style={[
              styles.toggleText,
              modo === "grupos" && styles.toggleTextAtivo
            ]}
          >
            Grupos
          </Text>
        </TouchableOpacity>
      </View>

      {modo === "pessoas" ? <RankingPessoas /> : <RankingGruposLista />}
    </Container>
  );
}

// ───────────── STYLES ─────────────
const styles = StyleSheet.create({
  toggle: {
    flexDirection: "row",
    backgroundColor: "#3F235A",
    borderRadius: 25,
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 4,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 22,
    alignItems: "center",
  },
  toggleAtivo: {
    backgroundColor: "#B84EF2",
  },
  toggleText: {
    color: "#A086CC",
    fontWeight: "bold",
  },
  toggleTextAtivo: {
    color: "#fff",
  },
});