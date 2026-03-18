import { useState } from "react";
import { Alert, ScrollView, ActivityIndicator } from "react-native";
import { GRUPOS } from "../../constants/grupos";
import { entrarNosGrupos } from "../../services/firestore";
import { useAuth } from "../../hooks/useAuth";
import {
  Container, Title, Subtitle, GrupoCard, GrupoEmoji,
  GrupoNome, CheckIcon, Button, ButtonText, ErrorText,
} from "./styles";

export default function SelecionarMaterias({ navigation }) {
  const { firebaseUser, refreshUsuario } = useAuth();
  const [selecionados, setSelecionados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  function toggleGrupo(groupId) {
    setSelecionados((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId]
    );
    setErro("");
  }

  async function handleConfirmar() {
    if (selecionados.length === 0) {
      setErro("Selecione pelo menos uma matéria para continuar.");
      return;
    }

    setCarregando(true);
    try {
      await entrarNosGrupos(firebaseUser.uid, selecionados);
      // Atualiza o contexto para refletir os novos groupIds
      refreshUsuario({ groupIds: selecionados });
      navigation.navigate("Menu");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar suas matérias. Tente novamente.");
      console.error(error);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <Container>
      <Title>Escolha suas Matérias</Title>
      <Subtitle>Selecione os grupos que deseja participar.{"\n"}Você pode estar em mais de um!</Subtitle>

      <ScrollView showsVerticalScrollIndicator={false}>
        {GRUPOS.map((grupo) => {
          const selected = selecionados.includes(grupo.id);
          return (
            <GrupoCard
              key={grupo.id}
              selected={selected}
              onPress={() => toggleGrupo(grupo.id)}
              activeOpacity={0.8}
            >
              <GrupoEmoji>{grupo.emoji}</GrupoEmoji>
              <GrupoNome selected={selected}>{grupo.name}</GrupoNome>
              {selected && <CheckIcon>✓</CheckIcon>}
            </GrupoCard>
          );
        })}
      </ScrollView>

      {erro ? <ErrorText>{erro}</ErrorText> : null}

      <Button onPress={handleConfirmar} disabled={carregando}>
        {carregando
          ? <ActivityIndicator color="#fff" />
          : <ButtonText>Confirmar e Entrar →</ButtonText>
        }
      </Button>
    </Container>
  );
}