import {
  doc, setDoc, getDoc, updateDoc,
  collection, query, where, getDocs,
  arrayUnion, increment, orderBy, serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

// ─── Level ───────────────────────────────────────────
export function calcularLevel(xp) {
  if (xp >= 2500) return 7;
  if (xp >= 1500) return 6;
  if (xp >= 1000) return 5;
  if (xp >= 600) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}

export function getTituloLevel(level) {
  const titulos = {
    1: "Iniciante",
    2: "Estudante",
    3: "Dedicado",
    4: "Avançado",
    5: "Expert",
    6: "Mestre",
    7: "Lendário",
  };
  return titulos[level] || "Iniciante";
}

// ─── USUÁRIOS ──────────────────────────────────────────────

// Cria documento do usuário após cadastro
export async function salvarUsuario(uid, nome, email) {
  await setDoc(doc(db, "users", uid), {
    name: nome,
    email: email,

    xp: 0,
    level: 1,

    xpByCategory: {
      humanas: 0,
      natureza: 0,
      exatas: 0,
      ti: 0,
    },

    groupIds: [],
    xpPorGrupo: {},
    lastDailyQuizDate: null,
    createdAt: serverTimestamp(),
  });
}

// Busca dados completos do usuário
export async function buscarUsuario(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? { uid, ...snap.data() } : null;
}

// Incrementa XP e recalcula nível
export async function atualizarXP(uid, xpGanho, groupId = null) {
  const ref = doc(db, "users", uid);

  // Busca XP atual para calcular novo level
  const snap = await getDoc(ref);
  const xpAtual = snap.data()?.xp || 0;
  const novoXP = xpAtual + xpGanho;
  const novoLevel = calcularLevel(novoXP);

  const update = {
    xp: increment(xpGanho),
    level: novoLevel,
  };

  if (groupId) {
    update[`xpPorGrupo.${groupId}`] = increment(xpGanho);
  }

  await updateDoc(ref, update);

  return { novoXP, novoLevel };
}


// ─── GRUPOS ────────────────────────────────────────────────

// Adiciona usuário aos grupos selecionados no cadastro
// groupIds[] → lista de IDs dos grupos escolhidos
export async function entrarNosGrupos(uid, groupIds) {
  if (!groupIds || groupIds.length === 0) return;

  // Atualiza o doc do usuário com os groupIds
  await updateDoc(doc(db, "users", uid), {
    groupIds: arrayUnion(...groupIds),
  });

  // Adiciona uid ao array members[] de cada grupo
  const promises = groupIds.map((groupId) =>
    updateDoc(doc(db, "groups", groupId), {
      members: arrayUnion(uid),
    })
  );
  await Promise.all(promises);
}

// Busca os grupos em que o usuário está
export async function buscarGruposDoUsuario(uid) {
  const userSnap = await getDoc(doc(db, "users", uid));
  if (!userSnap.exists()) return [];

  const groupIds = userSnap.data().groupIds || [];
  if (groupIds.length === 0) return [];

  // Busca cada grupo pelo id
  const promises = groupIds.map((id) => getDoc(doc(db, "groups", id)));
  const snaps = await Promise.all(promises);

  return snaps
    .filter((s) => s.exists())
    .map((s) => ({ id: s.id, ...s.data() }));
}

// Busca membros de um grupo ordenados por XP
export async function buscarMembrosDoGrupo(groupId) {
  const q = query(
    collection(db, "users"),
    where("groupIds", "array-contains", groupId),
    orderBy("xp", "desc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ uid: d.id, ...d.data() }));
}