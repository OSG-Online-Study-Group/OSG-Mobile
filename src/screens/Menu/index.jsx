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

import { LinearGradient } from "expo-linear-gradient";

import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useRankingGeral } from "../../hooks/useRanking";
import { useAuth } from "../../hooks/useAuth";

export default function Menu({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [vitorias, setVitorias] = useState(0);
  const [melhorMateria, setMelhorMateria] = useState("-");
  const [posicao, setPosicao] = useState(null);

  const { usuarios } = useRankingGeral();
  const { usuario } = useAuth();

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

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {loading ? (
          <ActivityIndicator color="#B84EF2" style={{ marginTop: 20 }} />
        ) : (
          <>
            {/* 🔥 CARD DE PERFIL */}
            <LinearGradient
              colors={
                Array.isArray(usuario?.theme) && usuario.theme.length >= 2
                  ? usuario.theme
                  : ["#7B2FF7", "#2C0E5A"]
              }
              style={{
                margin: 15,
                borderRadius: 20,
                overflow: "hidden",
                alignItems: "center",
                paddingBottom: 20
              }}
            >

              {/* 🔥 TOPO (BANNER + FOTO CORRIGIDO) */}
              <View style={{ width: "100%", height: 140 }}>

                {/* Banner padrão se não tiver tema */}
                {!usuario?.theme && (
                  <Image
                    source={require("../../assets/images/profile_banner.jpg")}
                    style={{
                      width: "100%",
                      height: 120,
                      position: "absolute",
                      top: 0
                    }}
                  />
                )}

                {/* FOTO (agora correta) */}
                <Image
                  source={
                    usuario?.photo
                      ? { uri: usuario.photo }
                      : require("../../assets/images/profile_photo.jpg")
                  }
                  style={{
                    position: "absolute",
                    bottom: 0,
                    alignSelf: "center",
                    width: 90,
                    height: 90,
                    borderRadius: 45,
                    borderWidth: 3,
                    borderColor: "#fff"
                  }}
                />
              </View>

              {/* NOME */}
              <Text style={{ color: "#fff", fontSize: 18, marginTop: 15 }}>
                {usuario?.name || "Usuário"}
              </Text>

              {/* STATS */}
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

            </LinearGradient>
          </>
        )}
      </ScrollView>

      <BottomNav />
    </Container>
  );
}