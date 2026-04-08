import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { enviarMensagem, ouvirMensagens, deletarMensagem } from "../services/chat";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export function useChat(groupId) {
  const { firebaseUser, usuario } = useAuth();
  const [mensagens, setMensagens] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!groupId) return;
    const unsub = ouvirMensagens(groupId, (msgs) => {
      setMensagens(msgs);
      setCarregando(false);
    });
    return () => unsub();
  }, [groupId]);

  useEffect(() => {
    if (!firebaseUser) return;
    async function verificarAdmin() {
      const snap = await getDoc(doc(db, "admins", firebaseUser.uid));
      setIsAdmin(snap.exists());
    }
    verificarAdmin();
  }, [firebaseUser]);

  async function handleSend() {
    if (!newMessage.trim()) return;
    await enviarMensagem(groupId, firebaseUser.uid, usuario.name, newMessage, usuario.photo || null);
    setNewMessage("");
  }

  async function handleDelete(messageId) {
    await deletarMensagem(groupId, messageId);
  }

  return {
    messages: mensagens,
    newMessage,
    setNewMessage,
    handleSend,
    handleDelete,
    user: firebaseUser,
    isAdmin,
    carregando,
  };
}