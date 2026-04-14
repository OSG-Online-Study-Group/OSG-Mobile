import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import {
  criarDuelo, responderDesafio, salvarRespostaDuelo,
  ouvirDuelosPendentes, ouvirDuelo, buscarUsuarios,
  verificarDuelosExpirados,
} from "../services/firestore";

// ── Hook para duelos pendentes (badge no Menu) ──
export function useDuelosPendentes() {
  const { firebaseUser } = useAuth();
  const [pendentes, setPendentes] = useState([]);

  useEffect(() => {
    if (!firebaseUser) return;
    verificarDuelosExpirados(firebaseUser.uid);
    const unsub = ouvirDuelosPendentes(firebaseUser.uid, setPendentes);
    return () => unsub();
  }, [firebaseUser]);

  return { pendentes, total: pendentes.length };
}

// ── Hook para criar duelo (ConviteDuelo) ──
export function useConviteDuelo() {
  const { firebaseUser, usuario } = useAuth();
  const [busca, setBusca] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  async function pesquisar() {
    if (!busca.trim()) return;
    setCarregando(true);
    setErro("");
    try {
      const resultado = await buscarUsuarios(busca);
      // Remove o próprio usuário da lista
      setUsuarios(resultado.filter((u) => u.uid !== firebaseUser.uid));
    } catch {
      setErro("Erro ao buscar usuários.");
    }
    setCarregando(false);
  }

  async function desafiar(desafiado) {
    setEnviando(true);
    setErro("");
    setSucesso("");
    try {
      await criarDuelo(
        firebaseUser.uid,
        usuario.name,
        desafiado.uid,
        desafiado.name,
      );
      setSucesso(`Desafio enviado para ${desafiado.name}!`);
      setUsuarios([]);
      setBusca("");
    } catch (err) {
      setErro(err.message);
    }
    setEnviando(false);
  }

  return {
    busca, setBusca,
    usuarios, carregando,
    enviando, erro, sucesso,
    pesquisar, desafiar,
  };
}

// ── Hook para responder duelo (DueloAmigo) ──
export function useDueloAmigo(dueloId) {
  const { firebaseUser } = useAuth();
  const [duelo, setDuelo] = useState(null);
  const [perguntaIndex, setPerguntaIndex] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [finalizado, setFinalizado] = useState(false);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (!dueloId) return;
    const unsub = ouvirDuelo(dueloId, (dados) => {
      setDuelo(dados);
      setCarregando(false);
    });
    return () => unsub();
  }, [dueloId]);

  const perguntaAtual = duelo?.perguntas?.[perguntaIndex];
  const totalPerguntas = duelo?.perguntas?.length || 5;

  async function responder(index) {
    if (respostas[perguntaIndex] !== undefined) return;

    const novasRespostas = [...respostas];
    novasRespostas[perguntaIndex] = index;
    setRespostas(novasRespostas);

    if (perguntaIndex < totalPerguntas - 1) {
      setTimeout(() => setPerguntaIndex((prev) => prev + 1), 1500);
      return;
    }

    // Última pergunta — salva no Firestore
    setFinalizado(true);
    await salvarRespostaDuelo(dueloId, firebaseUser.uid, novasRespostas);
  }

  function getOptionColor(index) {
    if (respostas[perguntaIndex] === undefined) return "#4c2d6f";
    if (index === perguntaAtual?.correta) return "#2f9e44";
    if (index === respostas[perguntaIndex]) return "#c92a2a";
    return "#4c2d6f";
  }

  return {
    duelo, perguntaAtual, perguntaIndex,
    totalPerguntas, respostas, finalizado,
    carregando, responder, getOptionColor,
  };
}