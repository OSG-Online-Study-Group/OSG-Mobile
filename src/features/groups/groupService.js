import { db } from "../../../src/services/firebase";

import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
  getDocs,
  where,
  deleteDoc,
  doc
} from "firebase/firestore";

export function listenMessages(groupId, callback) {

  const q = query(
    collection(db, "groups", groupId, "messages"),
    orderBy("createdAt", "desc"),
    limit(50)
  );

  return onSnapshot(q, (snapshot) => {

    const msgs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    callback(msgs.reverse());

  });

}

export async function sendMessage(groupId, text, userId) {

  if (!text.trim()) return;

  await addDoc(
    collection(db, "groups", groupId, "messages"),
    {
      text,
      senderId: userId,
      createdAt: serverTimestamp()
    }
  );

}

export async function deleteOldMessages(groupId) {

  const oneDayAgo = new Date();
  oneDayAgo.setHours(oneDayAgo.getHours() - 24);

  const q = query(
    collection(db, "groups", groupId, "messages"),
    where("createdAt", "<", oneDayAgo)
  );

  const snapshot = await getDocs(q);

  snapshot.forEach(async (msg) => {

    await deleteDoc(
      doc(db, "groups", groupId, "messages", msg.id)
    );

  });

}