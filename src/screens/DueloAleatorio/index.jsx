import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
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

  // 🔥 VOLTAR PRA HOME AUTOMÁTICO
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

  // 🔥 BUSCAR NOMES
  async function carregarNomes(pontuacao) {
    const db = getFirestore();
    const novosNomes = {};

    for (const uid of Object.keys(pontuacao)) {
      try {
        const ref = doc(db, "users", uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          novosNomes[uid] = snap.data().name;
        } else {
          novosNomes[uid] = "Desconhecido";
        }
      } catch {
        novosNomes[uid] = "Erro";
      }
    }

    setNomes(novosNomes);
  }

  // ⏱ contador da pergunta
  useEffect(() => {
    if (tempo <= 0) return;

    const interval = setInterval(() => {
      setTempo((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [tempo]);

  function responder(index) {
    if (!socket || selecionada !== null) return;

    setSelecionada(index);

    socket.emit("resposta", {
      salaId,
      respostaIndex: index,
    });
  }

  if (!pergunta && !fim) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#8A2BE2" />
        <Text style={styles.text}>Procurando adversário...</Text>
      </View>
    );
  }

  if (fim) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🏁 Fim de jogo</Text>
        <Text style={styles.text}>Pontuação final:</Text>

        {Object.entries(pontuacao).map(([uid, pontos]) => (
          <Text key={uid} style={styles.score}>
            {nomes[uid] || "Carregando..."}: {pontos}
          </Text>
        ))}

        <Text style={styles.text}>
          Voltando para o menu em {tempoVoltar}s...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>⏱ {tempo}s</Text>

      <Text style={styles.pergunta}>{pergunta?.pergunta}</Text>

      {pergunta?.alternativas.map((alt, index) => {
        let bg = "#2a1747";

        // 🔥 FEEDBACK IMEDIATO (clicou, mas ainda não recebeu resultado)
        if (selecionada !== null && correta === null) {
          if (index === selecionada) {
            bg = "#7c3aed";
          }
        }

        // 🔥 RESULTADO FINAL
        if (correta !== null) {
          if (index === correta) bg = "#16a34a";
          else if (index === selecionada) bg = "#dc2626";
        }

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.alt,
              {
                backgroundColor: bg,
                borderWidth: index === selecionada ? 2 : 0,
                borderColor: "#fff",
              },
            ]}
            onPress={() => responder(index)}
            disabled={selecionada !== null}
          >
            <Text style={styles.altText}>{alt}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}