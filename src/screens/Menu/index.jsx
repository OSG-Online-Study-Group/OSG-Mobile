import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  View,
  Text
} from "react-native";
import {
  Container, Header, Title, MenuIcon, SearchBar,
  ProfileIcon, Banner, SectionTitle
} from "./styles";
import styles from "./styles";
import BottomNav from "../../components/BottomNav";

import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useRankingGeral } from "../../hooks/useRanking";

export default function Menu({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [vitorias, setVitorias] = useState(0);
  const [melhorMateria, setMelhorMateria] = useState("-");
  const [posicao, setPosicao] = useState(null);

  const { usuarios } = useRankingGeral();

  useEffect(() => {
    carregarDados();
  }, []);

  useEffect(() => {
    calcularRanking();
  }, [usuarios]);

  async function carregarDados() {
    try {
      const user = getAuth().currentUser;
      const db = getFirestore();

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const data = snap.data();

        setVitorias(data.duelosVencidos || 0);

        const xpPorGrupo = data.xpPorGrupo || {};

        let melhor = null;
        let maiorXP = -1;

        for (const key in xpPorGrupo) {
          if (xpPorGrupo[key] > maiorXP) {
            maiorXP = xpPorGrupo[key];
            melhor = key;
          }
        }

        if (melhor) {
          setMelhorMateria(formatarMateria(melhor));
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function calcularRanking() {
    const user = getAuth().currentUser;
    if (!usuarios || usuarios.length === 0) return;

    const index = usuarios.findIndex((u) => u.id === user.uid);

    if (index !== -1) {
      setPosicao(index + 1);
    }
  }

  function formatarMateria(key) {
    return key
      .replace("group_", "")
      .replaceAll("_", " ")
      .toUpperCase();
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate("FiltroTreino")}>
          <MenuIcon source={require("../../assets/images/menu.jpg")} />
        </TouchableOpacity>
        <Title>OSG</Title>
      </Header>

      <SearchBar placeholder="Pesquisar" placeholderTextColor="#A086CC" />
      <Banner source={require("../../assets/images/banner.jpg")} />

      <SectionTitle>Suas Estatísticas</SectionTitle>

      <ScrollView>
        {loading ? (
          <ActivityIndicator color="#B84EF2" style={{ marginTop: 20 }} />
        ) : (
          <View style={styles.statsContainer}>

            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Vitórias</Text>
              <Text style={styles.statValue}>{vitorias}</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Ranking</Text>
              <Text style={styles.statValue}>
                {posicao ? `${posicao}°` : "-"}
              </Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Matéria Top</Text>
              <Text style={styles.statValueSmall}>
                {melhorMateria}
              </Text>
            </View>

          </View>
        )}
      </ScrollView>

      <BottomNav />
    </Container>
  );
}