import React from "react";
import { Image, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRankingGrupo } from "../../hooks/useRanking";
import { GRUPOS } from "../../constants/grupos";
import {
  Container, Header, LeftHeader, Logo, BackButton, BackText,
  Title, Card, IconCircle, CardIcon, CardText, TextContainer, Points, Crown
} from "./styles";

const GROUP_IMAGES = {
  matematica: require("../../assets/images/matematica.jpg"),
  ciencias_natureza: require("../../assets/images/ciencias_natureza.jpg"),
  linguagens: require("../../assets/images/linguagens.jpg"),
  ciencias_humanas: require("../../assets/images/ciencias_humanas.jpg"),
  informatica: require("../../assets/images/informatica.jpg"),
};

// Soma o XP total de todos os membros de um grupo
function calcularXPGrupo(usuarios, groupId) {
  return usuarios.reduce((acc, u) => acc + (u.xpPorGrupo?.[groupId] || 0), 0);
}

export default function RankingGrupos() {
  const navigation = useNavigation();

  // Busca XP de cada grupo
  const rankings = GRUPOS.map((grupo) => {
    const { membros } = useRankingGrupo(grupo.id);
    const totalXP = calcularXPGrupo(membros, grupo.id);
    return { ...grupo, totalXP };
  });

  // Ordena grupos por XP total decrescente
  const gruposOrdenados = [...rankings].sort((a, b) => b.totalXP - a.totalXP);

  return (
    <Container>
      <Header>
        <LeftHeader>
          <Image source={require("../../assets/images/libras.jpg")} style={{ width: 40, height: 40 }} />
          <Logo source={require("../../assets/images/icon_OSG.jpg")} />
        </LeftHeader>
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      <Title>Ranking de Grupos</Title>

      <FlatList
        data={gruposOrdenados}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Card>
            <IconCircle>
              {index === 0 && (
                <Crown source={require("../../assets/images/crown.png")} />
              )}
              <CardIcon source={GROUP_IMAGES[item.subject] || require("../../assets/images/icon_OSG.jpg")} />
            </IconCircle>
            <TextContainer>
              <CardText>{item.name}</CardText>
              <Points>{item.totalXP} XP</Points>
            </TextContainer>
          </Card>
        )}
      />
    </Container>
  );
}