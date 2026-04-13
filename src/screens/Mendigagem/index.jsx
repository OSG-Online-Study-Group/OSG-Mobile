import { ScrollView, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Header,
  Logo,
  CardIntro,
  Title,
  Description,
  DonateRow,
  DonateCard,
  DonateText,
  InputContainer,
  Input,
  Button,
  ButtonText,
  ButtonSecondary,
  ButtonSecondaryText
} from "./styles";

export default function AjudaDevs() {
  const [mensagem, setMensagem] = useState("");
  const [selectedValue, setSelectedValue] = useState(null); // ✅ controle do card selecionado
  const navigation = useNavigation();

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* HEADER */}
        <Header>
          <Logo source={require("../../assets/images/icon_OSG.jpg")} />
        </Header>

        {/* INTRO */}
        <CardIntro>
          <Title>Olá !!</Title>

          <Description>
            Este é um espaço para vc fazer doações {"\n"}
            para o nosso projeto !!
          </Description>

          <Image
            source={require("../../assets/images/cifrao 1.png")}
            style={{
              width: 50,
              height: 50,
              position: "absolute",
              right: 20,
              bottom: 40,
            }}
          />
        </CardIntro>

        {/* DOAÇÕES */}
        <DonateRow>
          <DonateCard
            activeOpacity={0.8}
            onPress={() => setSelectedValue(10)}
            selected={selectedValue === 10}
          >
            <Image
              source={require("../../assets/images/cafe 1.png")}
              style={{ width: 50, height: 50 }}
            />
            <DonateText>
              R$ 10 {"\n"}Café simples
            </DonateText>
          </DonateCard>

          <DonateCard
            activeOpacity={0.8}
            onPress={() => setSelectedValue(20)}
            selected={selectedValue === 20}
          >
            <Image
              source={require("../../assets/images/capuccino 1.png")}
              style={{ width: 50, height: 50 }}
            />
            <DonateText>
              R$ 20 {"\n"}Cappucino
            </DonateText>
          </DonateCard>

          <DonateCard
            activeOpacity={0.8}
            onPress={() => setSelectedValue(30)}
            selected={selectedValue === 30}
          >
            <Image
              source={require("../../assets/images/espresso 1.png")}
              style={{ width: 50, height: 50 }}
            />
            <DonateText>
              R$ 30 {"\n"}Café espresso
            </DonateText>
          </DonateCard>
        </DonateRow>

        {/* INPUT */}
        <InputContainer>
          <Description>Escreva sua mensagem para os Devs !</Description>

          <Input
            placeholder="Escreva algo aqui"
            placeholderTextColor="#aaa"
            multiline
            value={mensagem}
            onChangeText={setMensagem}
          />
        </InputContainer>

        {/* BOTÃO DOAR */}
        <Button activeOpacity={0.8}>
          <ButtonText>Doar Agora</ButtonText>
        </Button>

        {/* BOTÃO AGORA NÃO */}
        <ButtonSecondary
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Perfil")}
        >
          <ButtonSecondaryText>agora não</ButtonSecondaryText>
        </ButtonSecondary>

      </ScrollView>
    </Container>
  );
}