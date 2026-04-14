import React from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useConviteDuelo } from "../../hooks/useDuelo";
import {
  Container, Header, Title, BackButton, BackText,
  SearchBox, SearchInput, SearchButton,
  UserCard, UserInfo, UserName, UserLevel,
  DesafiarButton, DesafiarText,
  StatusText, EmptyText,
} from "./styles";

export default function ConviteDuelo({ navigation }) {
  const {
    busca, setBusca, usuarios, carregando,
    enviando, erro, sucesso, pesquisar, desafiar,
  } = useConviteDuelo();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
        <Title>Duelo Amigos</Title>
      </Header>

      {/* BUSCA */}
      <SearchBox>
        <SearchInput
          placeholder="Buscar usuário pelo nome..."
          placeholderTextColor="#A086CC"
          value={busca}
          onChangeText={setBusca}
          onSubmitEditing={pesquisar}
        />
        <SearchButton onPress={pesquisar}>
          <Ionicons name="search" size={20} color="#fff" />
        </SearchButton>
      </SearchBox>

      {erro ? <StatusText error>{erro}</StatusText> : null}
      {sucesso ? <StatusText>{sucesso}</StatusText> : null}

      {carregando ? (
        <ActivityIndicator color="#B84EF2" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(item) => item.uid}
          ListEmptyComponent={
            busca ? <EmptyText>Nenhum usuário encontrado.</EmptyText> : null
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
                <DesafiarText>⚔️ Desafiar</DesafiarText>
              </DesafiarButton>
            </UserCard>
          )}
        />
      )}
    </Container>
  );
}