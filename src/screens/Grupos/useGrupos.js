import { useState, useEffect } from "react";
import { buscarGruposDoUsuario } from "../../services/firestore";
import { useAuth } from "../../hooks/useAuth";

export function useGrupos() {
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

  return { grupos, carregando };
}