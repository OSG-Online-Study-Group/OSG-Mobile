import { ScrollView, Image, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Title,
  MenuIcon,
  SearchBar,
  ProfileIcon,
  Banner,
  SectionTitle,
  GroupItem,
  GroupText,
  MenuButton,
  MenuText,
  BottomMenu,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";


export default function Menu({ navigation }) {
  return (
    <Container>
      <Header>

        {/* 🔥 MenuIcon agora navega para FiltroEstudo */}
        <TouchableOpacity onPress={() => navigation.navigate("FiltroEstudo")}>
          <MenuIcon source={require("../../assets/images/menu.jpg")} />
        </TouchableOpacity>

        <Title>OSG</Title>

        {/* Ir para o Perfil */}
        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <ProfileIcon source={require("../../assets/images/libras.jpg")} />
        </TouchableOpacity>
      </Header>

      <SearchBar placeholder="Pesquisar" placeholderTextColor="#A086CC" />

      <Banner source={require("../../assets/images/banner.jpg")} />

      <SectionTitle>Seus Grupos</SectionTitle>

      <ScrollView>

        {/* Química Orgânica */}
        <TouchableOpacity onPress={() => navigation.navigate("QuimicaOrganica")}>
          <GroupItem>
            <Image source={require("../../assets/images/quimica_organica.jpg")} />
            <GroupText>Grupo de Química Orgânica</GroupText>
          </GroupItem>
        </TouchableOpacity>

        {/* Economia */}
        <TouchableOpacity onPress={() => navigation.navigate("Economia")}>
          <GroupItem>
            <Image source={require("../../assets/images/economia.jpg")} />
            <GroupText>Grupo de Economia</GroupText>
          </GroupItem>
        </TouchableOpacity>

        {/* Álgebra */}
        
          <GroupItem>
            <Image source={require("../../assets/images/algebra.jpg")} />
            <GroupText>Grupo de Álgebra</GroupText>
          </GroupItem>
        

        {/* Química Forense */}
        
          <GroupItem>
            <Image source={require("../../assets/images/quimica_forense.jpg")} />
            <GroupText>Grupo de Química Forense</GroupText>
          </GroupItem>
        
      </ScrollView>

      {/* MENU INFERIOR */}
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

        <MenuButton onPress={() => navigation.navigate("FiltroEstudo")}>
          <Ionicons name="book-outline" size={20} color="#fff" />
          <MenuText>Matérias</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-outline" size={20} color="#fff" />
          <MenuText>Perfil</MenuText>
        </MenuButton>

      </BottomMenu>
    </Container>
  );
}
