import { doc, setDoc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "./firebase";

// Salva o usuário no Firestore após cadastro
export async function salvarUsuario(uid, nome, email) {
  const ref = doc(db, "users", uid);
  await setDoc(ref, {
    name: nome,
    email: email,
    xp: 0,
    level: 1,
    groupIds: [],        // array — usuário pode ter vários grupos
    createdAt: new Date().toISOString(),
  });
}

// Busca dados do usuário
export async function buscarUsuario(uid) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

// Incrementa XP e recalcula nível
export async function atualizarXP(uid, xpGanho) {
  const ref = doc(db, "users", uid);

  // Busca XP atual para calcular novo nível
  const snap = await getDoc(ref);
  const xpAtual = snap.exists() ? (snap.data().xp || 0) : 0;
  const novoXP = xpAtual + xpGanho;
  const novoLevel = Math.floor(novoXP / 100) + 1;

  await updateDoc(ref, {
    xp: increment(xpGanho),
    level: novoLevel,
  });
}