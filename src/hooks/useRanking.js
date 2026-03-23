import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import {
  collection, query, orderBy, limit, onSnapshot, getDocs
} from "firebase/firestore";

// Ranking geral — top 50 usuários por XP total
export function useRankingGeral() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "users"),
      orderBy("xp", "desc"),
      limit(50)
    );
    const unsub = onSnapshot(q, (snap) => {
      const dados = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setUsuarios(dados);
      setCarregando(false);
    });
    return () => unsub();
  }, []);

  return { usuarios, carregando };
}

// Ranking de grupo — membros ordenados por XP naquele grupo
export function useRankingGrupo(groupId) {
  const [membros, setMembros] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (!groupId) return;
    const q = query(
      collection(db, "users"),
      orderBy(`xpPorGrupo.${groupId}`, "desc"),
      limit(50)
    );
    const unsub = onSnapshot(q, (snap) => {
      const dados = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .filter((u) => u.xpPorGrupo?.[groupId] > 0);
      setMembros(dados);
      setCarregando(false);
    });
    return () => unsub();
  }, [groupId]);

  return { membros, carregando };
}