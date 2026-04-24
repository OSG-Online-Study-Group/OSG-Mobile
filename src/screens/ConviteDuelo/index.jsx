import React from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useConviteDuelo } from "../../hooks/useDuelo";
import {
  Container, Header, Title, BackButton, BackText,
  SearchBox, SearchInput, SearchButton,
  UserCard, UserInfo, UserName, UserLevel,
  DesafiarButton, DesafiarText,
  StatusText, EmptyText, WaitingBox, WaitingText,
} from "./styles";

export default function ConviteDuelo({ navigation }) {
  const {
    busca, setBusca, usuarios, carregando,
    enviando, erro, sucesso, dueloIdCriado, desafiar,
  } = useConviteDuelo(navigation); // ← passa navigation para o hook

  // Aguardando o desafiado aceitar
  if (dueloIdCriado) {
    return (
      <Container>
        <Header>
          <BackButton onPress={() => navigation.goBack()}>
            <BackText>Voltar</BackText>
          </BackButton>
          <Title>Duelo Amigos</Title>
        </Header>

        <WaitingBox>
          <ActivityIndicator color="#B84EF2" size="large" />
          <WaitingText>{sucesso}</WaitingText>
          {erro ? <StatusText error>{erro}</StatusText> : null}
        </WaitingBox>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
        <Title>Duelo Amigos</Title>
      </Header>

      {/* BUSCA — reage enquanto digita */}
      <SearchBox>
        <SearchInput
          placeholder="Buscar usuário pelo nome..."
          placeholderTextColor="#A086CC"
          value={busca}
          onChangeText={setBusca}
          autoCorrect={false}
        />
        {carregando
          ? <ActivityIndicator color="#B84EF2" size="small" />
          : <Ionicons name="search" size={20} color="#A086CC" />
        }
      </SearchBox>

      {erro ? <StatusText error>{erro}</StatusText> : null}

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.uid}
        ListEmptyComponent={
          busca.length >= 2 && !carregando
            ? <EmptyText>Nenhum usuário encontrado.</EmptyText>
            : null
        }
        renderItem={({ item }) => (
          <UserCard>
            <UserInfo>
              <UserName>{item.name}</UserName>
              <UserLevel>Nível {item.level || 1} · {item.xp || 0} XP</UserLevel>
            </UserInfo>
            <DesafiarButton
              onPress={() => desafiar(item)}
              disabled={enviando}
            >
              {enviando
                ? <DesafiarText>Enviando...</DesafiarText>
                : <DesafiarText>⚔️ Desafiar</DesafiarText>
              }
            </DesafiarButton>
          </UserCard>
        )}
      />
    </Container>
  );
}