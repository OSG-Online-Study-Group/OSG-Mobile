import React from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { useDuelosPendentes } from "../../hooks/useDuelo";
import { responderDesafio } from "../../services/firestore";
import {
  Container, Header, Title, BackButton, BackText,
  DueloCard, DueloInfo, DueloNome, DueloData,
  ActionRow, AcceptButton, RecusarButton, ActionText,
  EmptyText,
} from "./styles";

export default function DuelosPendentes({ navigation }) {
  const { pendentes } = useDuelosPendentes();

  async function aceitar(dueloId) {
    await responderDesafio(dueloId, true);
    navigation.navigate("DueloAmigo", { dueloId });
  }

  async function recusar(dueloId) {
    await responderDesafio(dueloId, false);
  }

  function formatarData(iso) {
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("pt-BR", {
      day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit",
    });
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
        <Title>Duelos Pendentes</Title>
      </Header>

      <FlatList
        data={pendentes}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <EmptyText>Nenhum duelo pendente no momento.</EmptyText>
        }
        renderItem={({ item }) => (
          <DueloCard>
            <DueloInfo>
              <DueloNome>⚔️ {item.desafianteNome} te desafiou!</DueloNome>
              <DueloData>Expira em: {formatarData(item.expiraEm)}</DueloData>
            </DueloInfo>
            <ActionRow>
              <AcceptButton onPress={() => aceitar(item.id)}>
                <ActionText>✅ Aceitar</ActionText>
              </AcceptButton>
              <RecusarButton onPress={() => recusar(item.id)}>
                <ActionText>❌ Recusar</ActionText>
              </RecusarButton>
            </ActionRow>
          </DueloCard>
        )}
      />
    </Container>
  );
}