import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { io } from "socket.io-client";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function DueloAleatorio() {
  const [socket, setSocket] = useState(null);
  const [pergunta, setPergunta] = useState(null);
  const [tempo, setTempo] = useState(0);
  const [selecionada, setSelecionada] = useState(null);
  const [correta, setCorreta] = useState(null);
  const [pontuacao, setPontuacao] = useState({});
  const [nomes, setNomes] = useState({});
  const [fim, setFim] = useState(false);

  // 🔥 NOVO
  const [tempoVoltar, setTempoVoltar] = useState(5);

  const navigation = useNavigation();
  const salaId = "duelo-aleatorio";

  useEffect(() => {
    const auth = getAuth();

    const s = io("https://osg-duelo.onrender.com", {
      transports: ["websocket"],
    });

    setSocket(s);

    s.on("connect", async () => {
      const user = auth.currentUser;
      if (!user) return;

      const token = await user.getIdToken();
      s.emit("entrarDuelo", { token, salaId });
    });

    s.on("novaPergunta", ({ pergunta, tempo }) => {
      setPergunta(pergunta);
      setTempo(tempo);
      setSelecionada(null);
      setCorreta(null);
    });

    s.on("resultadoResposta", ({ correta, pontuacao }) => {
      setCorreta(correta);
      setPontuacao(pontuacao);
    });

    s.on("fimDeJogo", async ({ pontuacao }) => {
      setFim(true);
      setPontuacao(pontuacao);
      await carregarNomes(pontuacao);
    });

    return () => s.disconnect();
  }, []);

  // ⏱ contador da pergunta
  useEffect(() => {
    if (tempo <= 0) return;

    const interval = setInterval(() => {
      setTempo((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [tempo]);

  // 🔥 CONTADOR + VOLTAR MENU
  useEffect(() => {
    if (!fim) return;

    const interval = setInterval(() => {
      setTempoVoltar((t) => t - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigation.navigate("Menu");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [fim]);

  async function carregarNomes(pontuacao) {
    const db = getFirestore();
    const novosNomes = {};

    for (const uid of Object.keys(pontuacao)) {
      const ref = doc(db, "users", uid);
      const snap = await getDoc(ref);

      novosNomes[uid] = snap.exists() ? snap.data().name : "Desconhecido";
    }

    setNomes(novosNomes);
  }

  function responder(index) {
    if (!socket || selecionada !== null) return;

    setSelecionada(index);

    socket.emit("resposta", {
      salaId,
      respostaIndex: index,
    });
  }

  // 🔄 LOADING
  if (!pergunta && !fim) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#8A2BE2" />
        <Text style={styles.text}>Procurando adversário...</Text>
      </View>
    );
  }

  // 🏁 FIM
  if (fim) {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.title}>🏁 Fim de jogo</Text>

        {Object.entries(pontuacao).map(([uid, pontos]) => (
          <Text key={uid} style={styles.score}>
            {nomes[uid] || "Carregando..."}: {pontos}
          </Text>
        ))}

        {/* 🔥 CONTADOR VISUAL */}
        <Text style={styles.text}>Voltando ao menu em {tempoVoltar}s...</Text>
      </View>
    );
  }

  // 🎯 JOGO
  return (
    <View style={styles.container}>
      <View style={styles.topSpace} />

      <View style={styles.header}>
        <View style={styles.badgeMateria}>
          <Text style={styles.badgeText}>
            {pergunta?.materia?.toUpperCase()}
          </Text>
        </View>

        <Text style={styles.timer}>⏱ {tempo}s</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.pergunta}>{pergunta?.pergunta}</Text>

        {pergunta?.alternativas.map((alt, index) => {
          let bg = "#2a1747";

          if (selecionada !== null && correta === null) {
            if (index === selecionada) bg = "#7c3aed";
          }

          if (correta !== null) {
            if (index === correta) bg = "#16a34a";
            else if (index === selecionada) bg = "#dc2626";
          }

          return (
            <TouchableOpacity
              key={index}
              style={[styles.alt, { backgroundColor: bg }]}
              onPress={() => responder(index)}
              disabled={selecionada !== null}
            >
              <Text style={styles.altText}>{alt}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.bottomSpace} />
    </View>
  );
}
