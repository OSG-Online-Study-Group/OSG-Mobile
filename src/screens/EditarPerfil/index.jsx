import { ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";

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
  FooterButtons,
  CancelButton,
  ConfirmButton,
  FooterText
} from "./styles";

export default function EditarPerfil() {
  const navigation = useNavigation();
  const { usuario, firebaseUser } = useAuth();

  const {
    foto,
    theme,
    nome,
    setTheme,
    setNome,
    escolherFoto,
    salvar,
    removerFoto
  } = useProfile(usuario);

  const temas = [
    ["#ff7e5f", "#feb47b"],
    ["#6a11cb", "#2575fc"],
    ["#11998e", "#38ef7d"],
    ["#fc466b", "#3f5efb"],
  ];


  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* BANNER DINÂMICO */}
        {theme ? (
          <LinearGradient
            colors={theme}
            style={{ width: "100%", height: 220 }}
          />
        ) : (
          <Banner source={require("../../assets/images/profile_banner.jpg")} />
        )}

        {/* FOTO */}
        <ProfileImage
          source={
            foto
              ? { uri: foto }
              : require("../../assets/images/profile_photo.jpg")
          }
        />

        <Button onPress={escolherFoto}>
          <ButtonText>Mudar Foto</ButtonText>
        </Button>

        <Button onPress={removerFoto}>
          <ButtonText>Voltar foto padrão</ButtonText>
        </Button>

        <Button onPress={() => setTheme(null)}>
          <ButtonText>Remover plano de fundo</ButtonText>
        </Button>

        {/* CORES */}
        <ThemeSelector>
          {temas.map((cores, index) => (
            <ThemeCircle
              key={index}
              color={cores[0]} // 🔥 MOSTRA A COR
              active={JSON.stringify(theme) === JSON.stringify(cores)}
              onPress={() => setTheme(cores)}
            />
          ))}
        </ThemeSelector>

        {/* NOME */}
        <Section>
          <SectionTitle>Nome</SectionTitle>
          <Input
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
          />
        </Section>

        {/* BOTÕES */}
        <FooterButtons>

          <CancelButton onPress={() => navigation.goBack()}>
            <FooterText>Cancelar</FooterText>
          </CancelButton>

          <ConfirmButton onPress={() => salvar(firebaseUser.uid, navigation)}>
            <FooterText>Salvar</FooterText>
          </ConfirmButton>

        </FooterButtons>

      </ScrollView>
    </Container>
  );
}