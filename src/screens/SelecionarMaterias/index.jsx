import { useState } from "react";
import { Alert, ScrollView, ActivityIndicator } from "react-native";
import { GROUPS } from "../../constants/groups";
import { entrarNosGrupos } from "../../services/firestore";
import { useAuth } from "../../hooks/useAuth";
import {
  Container, Title, Subtitle, GrupoCard, GrupoEmoji,
  GrupoNome, CheckIcon, Button, ButtonText, ErrorText,
} from "./styles";

export default function SelecionarMaterias({ navigation }) {
  const { firebaseUser, refreshUsuario, usuario } = useAuth();

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
      setErro("Selecione pelo menos uma matéria.");
      return;
    }

    setCarregando(true);

    try {
      const gruposFinal = [
        ...new Set([
          ...(usuario?.groupIds || []),
          ...selecionados
        ])
      ];

      // atualiza UI
      refreshUsuario({
        groupIds: gruposFinal
      });

      // salva no firestore
      await entrarNosGrupos(firebaseUser.uid, selecionados);

      // ✅ VAI DIRETO PARA A TELA GRUPOS
      navigation.navigate("Grupos");

    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível salvar.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <Container>
      <Title>Escolha suas Matérias</Title>

      <Subtitle>
        Selecione os grupos que deseja participar.{"\n"}
        Você pode estar em mais de um!
      </Subtitle>

      <ScrollView showsVerticalScrollIndicator={false}>
        {GROUPS.map((grupo) => {
          const selected = selecionados.includes(grupo.id);

          return (
            <GrupoCard
              key={grupo.id}
              selected={selected}
              onPress={() => toggleGrupo(grupo.id)}
              activeOpacity={0.8}
            >
              <GrupoEmoji>{grupo.emoji}</GrupoEmoji>

              <GrupoNome selected={selected}>
                {grupo.name}
              </GrupoNome>

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