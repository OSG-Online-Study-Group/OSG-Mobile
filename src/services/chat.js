import { db } from "./firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

// 🔥 ENVIAR MENSAGEM (SEM senderName)
export async function enviarMensagem(groupId, uid, text) {
  if (!groupId || !uid || !text.trim()) return;

  await addDoc(collection(db, "groups", groupId, "messages"), {
    text: text.trim(),
    senderId: uid,
    createdAt: serverTimestamp(),
    deleted: false,
  });
}

// 🔥 OUVIR MENSAGENS
export function ouvirMensagens(groupId, callback) {
  const q = query(
    collection(db, "groups", groupId, "messages"),
    orderBy("createdAt", "asc")
  );

  return onSnapshot(q, (snap) => {
    const msgs = snap.docs
      .map((d) => ({
        id: d.id,
        ...d.data(),
      }))
      .filter((m) => !m.deleted);

    callback(msgs);
  });
}

//  DELETAR MENSAGEM (soft delete)
export async function deletarMensagem(groupId, messageId) {
  await updateDoc(doc(db, "groups", groupId, "messages", messageId), {
    deleted: true,
  });
}