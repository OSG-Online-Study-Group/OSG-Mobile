import { ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  Banner,
  ProfileImage,
  Button,
  ButtonText,
  ThemeSelector,
  ThemeCircle,
  Section,
  SectionTitle,
  Input,
  EditIcon,
  PointsCard,
  PointsText,
  StatsContainer,
  Stat,
  StatNumber,
  StatLabel,
  ItemsContainer,
  Item,
  FooterButtons,
  CancelButton,
  ConfirmButton,
  FooterText
} from "./styles";

export default function PersonalizarPerfil() {

  return (
    <Container>

      <ScrollView showsVerticalScrollIndicator={false}>

        <Banner source={require("../../assets/images/profile_banner.jpg")} />

        <ProfileImage source={require("../../assets/images/profile_photo.jpg")} />

        <Button>
          <ButtonText>Mudar Foto de Perfil</ButtonText>
        </Button>

        <Button>
          <ButtonText>Mudar plano de fundo</ButtonText>
        </Button>


        {/* seleção de temas */}

        <ThemeSelector>

          <TouchableOpacity>
            <Ionicons name="arrow-back-circle-outline" size={28} color="#fff" />
          </TouchableOpacity>

          <ThemeCircle active />

          <ThemeCircle />

          <ThemeCircle />

          <ThemeCircle />

          <TouchableOpacity>
            <Ionicons name="arrow-forward-circle-outline" size={28} color="#fff" />
          </TouchableOpacity>

        </ThemeSelector>


        {/* Nome */}

        <Section>

          <SectionTitle>Nome de Exibição</SectionTitle>

          <Input>
            Poker Ghost
            <EditIcon>
              <Ionicons name="pencil" size={18} color="#d36df3" />
            </EditIcon>
          </Input>

          <Input>
            @Poker_Ghost111
            <EditIcon>
              <Ionicons name="pencil" size={18} color="#d36df3" />
            </EditIcon>
          </Input>

        </Section>


        {/* estatisticas */}

        <Section>

          <SectionTitle>Estatísticas do Perfil</SectionTitle>

          <PointsCard>
            <PointsText>Pontos: 777.777</PointsText>
          </PointsCard>

          <StatsContainer>

            <Stat>
              <StatNumber>5</StatNumber>
              <StatLabel>Matérias</StatLabel>
            </Stat>

            <Stat>
              <StatNumber>1,921</StatNumber>
              <StatLabel>Últimos Pontos</StatLabel>
            </Stat>

            <Stat>
              <StatNumber>12</StatNumber>
              <StatLabel>Amigos</StatLabel>
            </Stat>

          </StatsContainer>

        </Section>


        {/* conquistas */}

        <Section>

          <SectionTitle>Conquistas e itens Visuais</SectionTitle>

          <ItemsContainer>

            <Item source={require("../../assets/images/badge1.jpg")} />
            <Item source={require("../../assets/images/badge2.jpg")} />
            <Item source={require("../../assets/images/badge3.jpg")} />
            <Item source={require("../../assets/images/badge2.jpg")} />
            <Item source={require("../../assets/images/badge1.jpg")} />

          </ItemsContainer>

        </Section>


        {/* botões */}

        <FooterButtons>

          <CancelButton>
            <FooterText>Cancelar alterações</FooterText>
          </CancelButton>

          <ConfirmButton>
            <FooterText>Confirmar alterações</FooterText>
          </ConfirmButton>

        </FooterButtons>

      </ScrollView>

    </Container>
  );
}