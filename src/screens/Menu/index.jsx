import { ScrollView, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import {
  Container, Header, Title, MenuIcon, SearchBar,
  ProfileIcon, Banner, SectionTitle, GroupItem,
  GroupText, MenuButton, MenuText, BottomMenu,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useMenu } from "./useMenu";

const GROUP_IMAGES = {
  matematica: require("../../assets/images/icon_OSG.jpg"),
  ciencias_natureza: require("../../assets/images/icon_OSG.jpg"),
  linguagens: require("../../assets/images/icon_OSG.jpg"),
  ciencias_humanas: require("../../assets/images/icon_OSG.jpg"),
  informatica: require("../../assets/images/icon_OSG.jpg"),
};

export default function Menu({ navigation }) {
  const { grupos, carregando } = useMenu();

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate("FiltroTreino")}>
          <MenuIcon source={require("../../assets/images/menu.jpg")} />
        </TouchableOpacity>
        <Title>OSG</Title>
        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <ProfileIcon source={require("../../assets/images/libras.jpg")} />
        </TouchableOpacity>
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
            {grupos.map((grupo) => {
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
            <TouchableOpacity onPress={() => navigation.navigate("SelecionarMaterias")}>
              <GroupItem>
                <GroupText>+ Adicionar matéria</GroupText>
              </GroupItem>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
      <BottomMenu>
        <MenuButton onPress={() => navigation.navigate("Menu")}>
          <Ionicons name="home-outline" size={20} color="#fff" />
          <MenuText>Home</MenuText>
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate("Game")}>
          <Ionicons name="game-controller-outline" size={20} color="#fff" />
          <MenuText>Game</MenuText>
        </MenuButton>
        <MenuButton active>
          <Ionicons name="chatbubble-ellipses" size={22} color="#fff" />
          <MenuText>Grupos</MenuText>
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-outline" size={20} color="#fff" />
          <MenuText>Perfil</MenuText>
        </MenuButton>
      </BottomMenu>
    </Container>
  );
}