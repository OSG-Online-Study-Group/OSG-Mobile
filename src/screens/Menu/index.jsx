import { ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import {
  Container, Header, Title, MenuIcon, SearchBar,
  ProfileIcon, Banner, SectionTitle, GroupItem,
  GroupText, MenuButton, MenuText, BottomMenu,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useMenu } from "./useMenu";

// Imagens por subject (frontend define o mapeamento visual)
const GROUP_IMAGES = {
  quimica_organica: require("../../assets/images/quimica_organica.jpg"),
  economia: require("../../assets/images/economia.jpg"),
  algebra: require("../../assets/images/algebra.jpg"),
  quimica_forense: require("../../assets/images/quimica_forense.jpg"),
};

export default function Menu({ navigation }) {
  const { grupos, carregando, getScreenName } = useMenu();

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate("FiltroEstudo")}>
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
          // Usuário não entrou em nenhum grupo ainda
          <TouchableOpacity onPress={() => navigation.navigate("SelecionarMaterias")}>
            <GroupItem>
              <GroupText>+ Selecionar matérias</GroupText>
            </GroupItem>
          </TouchableOpacity>
        ) : (
          grupos.map((grupo) => {
            const screen = getScreenName(grupo.subject);
            const image = GROUP_IMAGES[grupo.subject];
            return (
              <TouchableOpacity
                key={grupo.id}
                onPress={() => screen && navigation.navigate(screen)}
                disabled={!screen}
              >
                <GroupItem>
                  {image && (
                    // eslint-disable-next-line react-native/no-inline-styles
                    <img src={image} style={{ width: 50, height: 50 }} />
                  )}
                  <GroupText>{grupo.name}</GroupText>
                </GroupItem>
              </TouchableOpacity>
            );
          })
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