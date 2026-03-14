import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

import {
  listenMessages,
  sendMessage,
  deleteOldMessages
} from "./groupService";

export function useGroupChat(groupId) {

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {

    deleteOldMessages(groupId);

    const unsubscribe = listenMessages(groupId, setMessages);

    return unsubscribe;

  }, [groupId]);

  const handleSend = async () => {

    await sendMessage(groupId, newMessage, user.uid);

    setNewMessage("");

  };

  return {
    messages,
    newMessage,
    setNewMessage,
    handleSend,
    user
  };

}