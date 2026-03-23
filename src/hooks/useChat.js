import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { enviarMensagem, ouvirMensagens } from "../services/chat";

export function useChat(groupId) {
  const { firebaseUser, usuario } = useAuth();
  const [mensagens, setMensagens] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (!groupId) return;
    const unsub = ouvirMensagens(groupId, (msgs) => {
      setMensagens(msgs);
      setCarregando(false);
    });
    return () => unsub();
  }, [groupId]);

  async function handleSend() {
    if (!newMessage.trim()) return;
    await enviarMensagem(groupId, firebaseUser.uid, usuario.name, newMessage);
    setNewMessage("");
  }

  return {
    messages: mensagens,
    newMessage,
    setNewMessage,
    handleSend,
    user: firebaseUser,
    carregando,
  };
}