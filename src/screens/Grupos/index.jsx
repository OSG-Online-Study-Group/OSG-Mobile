import { ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useGrupos } from "./useGrupos";

import {
  Container,
  Header,
  TopRow,
  Title,
  SearchBar,
  SectionTitle,
  GroupCard,
  GroupIcon,
  GroupContent,
  GroupTitle,
  BottomMenu,
  MenuButton,
  MenuText,
  CenterButton,
} from "./styles";

const GROUP_IMAGES = {
  matematica: require("../../assets/images/icon mat.png"),
  ciencias_natureza: require("../../assets/images/icon natural science.png"),
  linguagens: require("../../assets/images/icon linguagens.png"),
  ciencias_humanas: require("../../assets/images/icon ciencias humanas.png"),
  informatica: require("../../assets/images/icon hacker.png"),
};

export default function Grupos({ navigation }) {
  const { grupos, carregando } = useGrupos();

  return (
    <Container>
      <Header>
        <TopRow>
          <Title>OSG</Title>

          <TouchableOpacity
            onPress={() => navigation.navigate("Perfil")}
          ></TouchableOpacity>
        </TopRow>

        <SearchBar placeholder="Pesquisar" placeholderTextColor="#8e6db5" />
      </Header>

      <SectionTitle>Seus Grupos</SectionTitle>

      <ScrollView showsVerticalScrollIndicator={false}>
        {carregando ? (
          <ActivityIndicator
            size="large"
            color="#420286"
            style={{ marginTop: 20 }}
          />
        ) : grupos.length === 0 ? (
          <TouchableOpacity
            onPress={() => navigation.navigate("SelecionarMaterias")}
          >
            <GroupCard>
              <GroupContent>
                <GroupTitle>+ Selecionar matérias</GroupTitle>
              </GroupContent>
            </GroupCard>
          </TouchableOpacity>
        ) : (
          <>
            {grupos.map((grupo) => {
              const image = GROUP_IMAGES[grupo.subject];

              return (
                <TouchableOpacity
                  key={grupo.id}
                  onPress={() =>
                    navigation.navigate("GrupoChat", {
                      groupId: grupo.id,
                      name: grupo.name,
                      subject: grupo.subject,
                    })
                  }
                >
                  <GroupCard>
                    {image && <GroupIcon source={image} />}
                    <GroupContent>
                      <GroupTitle>{grupo.name}</GroupTitle>
                    </GroupContent>
                  </GroupCard>
                </TouchableOpacity>
              );
            })}

            {/* botão sempre no final */}
            <TouchableOpacity
              onPress={() => navigation.navigate("SelecionarMaterias")}
            >
              <GroupCard>
                <GroupContent>
                  <GroupTitle>+ Adicionar matéria</GroupTitle>
                </GroupContent>
              </GroupCard>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>

      {/* MENU INFERIOR */}

      <BottomMenu>
        <MenuButton onPress={() => navigation.navigate("Menu")}>
          <Ionicons name="home-outline" size={22} color="#fff" />
          <MenuText>Home</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Game")}>
          <Ionicons name="game-controller-outline" size={22} color="#fff" />
          <MenuText>Game</MenuText>
        </MenuButton>

        <CenterButton onPress={() => navigation.navigate("Ranking")}>
          <Ionicons name="trophy" size={28} color="#fff" />
        </CenterButton>

        <MenuButton onPress={() => navigation.navigate("Grupos")}>
          <Ionicons name="grid-outline" size={22} color="#fff" />
          <MenuText>Grupos</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-outline" size={22} color="#fff" />
          <MenuText>Perfil</MenuText>
        </MenuButton>
      </BottomMenu>
    </Container>
  );
}
