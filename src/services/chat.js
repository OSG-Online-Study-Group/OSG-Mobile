import { db } from "./firebase";
import {
  collection, addDoc, onSnapshot,
  orderBy, query, updateDoc, doc,
  serverTimestamp,
} from "firebase/firestore";

export async function enviarMensagem(groupId, uid, senderName, text) {
  await addDoc(collection(db, "groups", groupId, "messages"), {
    text,
    senderId: uid,
    senderName,
    createdAt: serverTimestamp(),
    deleted: false,
  });
}

export function ouvirMensagens(groupId, callback) {
  const q = query(
    collection(db, "groups", groupId, "messages"),
    orderBy("createdAt", "asc")
  );
  return onSnapshot(q, (snap) => {
    const msgs = snap.docs
      .map((d) => ({ id: d.id, ...d.data() }))
      .filter((m) => !m.deleted);
    callback(msgs);
  });
}

export async function deletarMensagem(groupId, messageId) {
  await updateDoc(doc(db, "groups", groupId, "messages", messageId), {
    deleted: true,
  });
}