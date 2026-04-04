import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { io } from "socket.io-client";
import { getAuth } from "firebase/auth";
import styles from "./styles";

export default function DueloAleatorio() {
  const [socket, setSocket] = useState(null);
  const [conectado, setConectado] = useState(false);
  const [perguntas, setPerguntas] = useState([]);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [oponentePontos, setOponentePontos] = useState(0);
  const [carregando, setCarregando] = useState(true);

  const salaId = "duelo-aleatorio";

  useEffect(() => {
    const auth = getAuth();

    const newSocket = io("https://osg-duelo.onrender.com", {
      transports: ["websocket"],
    });

    setSocket(newSocket);

    newSocket.on("connect", async () => {
      console.log("Conectado!");

      const user = auth.currentUser;
      if (!user) return;

      const token = await user.getIdToken();

      newSocket.emit("entrarDuelo", {
        token,
        salaId,
      });

      setConectado(true);
    });

    newSocket.on("perguntas", (data) => {
      console.log("Perguntas recebidas");
      setPerguntas(data);
      setCarregando(false);
    });

    newSocket.on("dueloAtualizado", (data) => {
      const user = auth.currentUser;
      if (!user) return;

      const jogadores = data.pontuacao || {};

      Object.keys(jogadores).forEach((uid) => {
        if (uid !== user.uid) {
          setOponentePontos(jogadores[uid]);
        }
      });
    });

    newSocket.on("connect_error", (err) => {
      console.log("Erro conexão:", err.message);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  function responder() {
    if (!socket) return;

    const pontos = 10;

    setPontuacao((prev) => prev + pontos);

    socket.emit("resposta", {
      salaId,
      pontos,
    });

    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual((prev) => prev + 1);
    }
  }

  if (!conectado || carregando) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#8A2BE2" />
        <Text style={styles.loadingText}>
          Aguardando outro jogador...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚔️ Duelo</Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.score}>Você: {pontuacao}</Text>
        <Text style={styles.score}>Oponente: {oponentePontos}</Text>
      </View>

      <View style={styles.perguntaBox}>
        <Text style={styles.pergunta}>
          {perguntas[perguntaAtual]}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={responder}>
        <Text style={styles.buttonText}>Responder</Text>
      </TouchableOpacity>
    </View>
  );
}