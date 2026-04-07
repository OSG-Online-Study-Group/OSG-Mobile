import { ScrollView, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import {
  Container, Header, Title, MenuIcon, SearchBar,
  ProfileIcon, Banner, SectionTitle, GroupItem,
  GroupText
} from "./styles";
import { useMenu } from "./useMenu";
import BottomNav from "../../components/BottomNav";

const GROUP_IMAGES = {
  matematica: require("../../assets/images/icon mat.png"),
  ciencias_natureza: require("../../assets/images/icon natural science.png"),
  linguagens: require("../../assets/images/icon linguagens.png"),
  ciencias_humanas: require("../../assets/images/icon ciencias humanas.png"),
  informatica: require("../../assets/images/icon hacker.png"),
};

export default function Menu({ navigation }) {
  const { grupos, carregando } = useMenu();

  // 👇 pega apenas os 3 primeiros grupos
  const gruposLimitados = grupos.slice(0, 3);

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate("FiltroTreino")}>
          <MenuIcon source={require("../../assets/images/menu.jpg")} />
        </TouchableOpacity>
        <Title>OSG</Title>
      </Header>

      <SearchBar placeholder="Pesquisar" placeholderTextColor="#A086CC" />
      <Banner source={require("../../assets/images/banner.jpg")} />

      <SectionTitle>Seus Grupos</SectionTitle>

      <ScrollView>
        {carregando ? (
          <ActivityIndicator color="#B84EF2" style={{ marginTop: 20 }} />
        ) : grupos.length === 0 ? (
          <TouchableOpacity onPress={() => navigation.navigate("SelecionarMaterias")}>
            <GroupItem>
              <GroupText>+ Selecionar matérias</GroupText>
            </GroupItem>
          </TouchableOpacity>
        ) : (
          <>
            {gruposLimitados.map((grupo) => {
              const image = GROUP_IMAGES[grupo.subject];
              return (
                <TouchableOpacity
                  key={grupo.id}
                  onPress={() => navigation.navigate("GrupoChat", {
                    groupId: grupo.id,
                    name: grupo.name,
                    subject: grupo.subject,
                  })}
                >
                  <GroupItem>
                    {image && (
                      <Image source={image} style={{ width: 50, height: 50 }} />
                    )}
                    <GroupText>{grupo.name}</GroupText>
                  </GroupItem>
                </TouchableOpacity>
              );
            })}

            {/* 👇 botão sempre visível */}
            <TouchableOpacity onPress={() => navigation.navigate("SelecionarMaterias")}>
              <GroupItem>
                <GroupText>+ Adicionar matéria</GroupText>
              </GroupItem>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>

      <BottomNav />
    </Container>
  );
}