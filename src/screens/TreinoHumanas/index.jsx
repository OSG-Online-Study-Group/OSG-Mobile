import React, { useState } from "react";
import { useTreino } from "../../hooks/useTreino";
import * as S from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function TreinoHumanas({ navigation }) {
  const { messages, responder } = useTreino("humanas");
  const [input, setInput] = useState("");

  return (
    <S.Container>
      <S.Header>
        <S.Title>Humanas</S.Title>
      </S.Header>

      <S.ChatArea>
        {messages.map((msg) => (
          <S.MessageRow key={msg.id}>
            <S.MessageBubble>
              <S.MessageText>{msg.text}</S.MessageText>
            </S.MessageBubble>
          </S.MessageRow>
        ))}
      </S.ChatArea>

      <S.InputArea>
        <S.Input value={input} onChangeText={setInput} />
        <S.SendButton onPress={() => {
          if (!input) return;
          responder(input);
          setInput("");
        }}>
          <S.Title>➤</S.Title>
        </S.SendButton>
      </S.InputArea>
    </S.Container>
  );
}