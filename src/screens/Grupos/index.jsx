import { ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  Header,
  TopRow,
  MenuIcon,
  Title,
  ProfileIcon,
  SearchBar,
  SectionTitle,
  GroupCard,
  GroupIcon,
  GroupContent,
  GroupTitle,
  GroupMessage,
  TimeText,
  BottomMenu,
  MenuButton,
  MenuText,
  CenterButton
} from "./styles";

export default function Grupos({ navigation }) {
  return (
    <Container>

      <Header>

        <TopRow>

          <TouchableOpacity onPress={() => navigation.navigate("FiltroTreino")}>
            <MenuIcon source={require("../../assets/images/menu.jpg")} />
          </TouchableOpacity>

          <Title>OSG</Title>

          <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
            <ProfileIcon source={require("../../assets/images/libras.jpg")} />
          </TouchableOpacity>

        </TopRow>

        <SearchBar
          placeholder="Pesquisar"
          placeholderTextColor="#8e6db5"
        />

      </Header>


      <SectionTitle>Seus Grupos</SectionTitle>


      <ScrollView showsVerticalScrollIndicator={false}>

        <GroupCard>

          <GroupIcon source={require("../../assets/images/quimica_organica.jpg")} />

          <GroupContent>

            <GroupTitle>Grupo de Quimica Organica</GroupTitle>

            <GroupMessage>
              Coreana: Arigato
            </GroupMessage>

          </GroupContent>

          <TimeText>13:51</TimeText>

        </GroupCard>


        <GroupCard>

          <GroupIcon source={require("../../assets/images/economia.jpg")} />

          <GroupContent>

            <GroupTitle>Grupo de Economia</GroupTitle>

            <GroupMessage>
              Bruna: Preciso de Ajuda
            </GroupMessage>

          </GroupContent>

          <TimeText>11:47</TimeText>

        </GroupCard>


        <GroupCard>

          <GroupIcon source={require("../../assets/images/algebra.jpg")} />

          <GroupContent>

            <GroupTitle>Grupo de Algebra</GroupTitle>

            <GroupMessage>
              Jurandir: A resposta é A
            </GroupMessage>

          </GroupContent>

          <TimeText>09:43</TimeText>

        </GroupCard>


        <GroupCard>

          <GroupIcon source={require("../../assets/images/quimica_forense.jpg")} />

          <GroupContent>

            <GroupTitle>Grupo de Quimica Forense</GroupTitle>

            <GroupMessage>
              Carla: Obrigada
            </GroupMessage>

          </GroupContent>

          <TimeText>10:01</TimeText>

        </GroupCard>

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