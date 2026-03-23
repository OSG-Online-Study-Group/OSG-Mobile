import React, { useState } from "react";
import { useTreino } from "../../hooks/useTreino";
import * as S from "./styles";

export default function TreinoExtras() {
  const { messages, responder } = useTreino("extras");
  const [input, setInput] = useState("");

  return (
    <S.Container>
      <S.Title>Computação</S.Title>

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