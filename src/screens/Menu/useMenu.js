import { useState, useEffect } from "react";
import { buscarGruposDoUsuario } from "../../services/firestore";
import { useAuth } from "../../hooks/useAuth";
import { GROUP_BY_ID } from "../../constants/grupos";

// Mapeia subject do grupo para a tela de navegação correspondente
const SUBJECT_TO_SCREEN = {
  quimica_organica: "QuimicaOrganica",
  economia: "Economia",
  algebra: "Algebra",          // criar tela futuramente se necessário
  quimica_forense: "QuimicaForense",
};

export function useMenu() {
  const { firebaseUser } = useAuth();
  const [grupos, setGrupos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (!firebaseUser) return;
    carregarGrupos();
  }, [firebaseUser]);

  async function carregarGrupos() {
    try {
      const dados = await buscarGruposDoUsuario(firebaseUser.uid);
      setGrupos(dados);
    } catch (error) {
      console.error("Erro ao carregar grupos:", error);
    } finally {
      setCarregando(false);
    }
  }

  function getScreenName(subject) {
    return SUBJECT_TO_SCREEN[subject] || null;
  }

  return { grupos, carregando, getScreenName };
}