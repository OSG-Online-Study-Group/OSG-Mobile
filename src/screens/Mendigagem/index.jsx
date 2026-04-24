import { ScrollView, Image, Linking, Alert } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";

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
  ExpandContainer,
  QRCodeImage,
  InputContainer,
  Input,
  Button,
  ButtonText,
  ButtonSecondary,
  ButtonSecondaryText
} from "./styles";

export default function AjudaDevs() {
  const [mensagem, setMensagem] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

 const pixCopiaCola = process.env.EXPO_PUBLIC_PIX_COPIA_COLA;

  // 🔗 Abrir BuyMeACoffee
  const handleDonate = () => {
    Linking.openURL("https://buymeacoffee.com/Online_Study_Group");
  };

  // 🔁 Toggle abrir/fechar
  const handleSelect = (option) => {
    setSelectedOption((prev) => (prev === option ? null : option));
  };

  // 📋 Copiar Pix
  const handleCopyPix = async () => {
    await Clipboard.setStringAsync(pixCopiaCola);
    Alert.alert("Sucesso", "Código Pix copiado!");
  };

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
        </CardIntro>

        {/* OPÇÕES */}
        <DonateRow>
          {/* PIX */}
          <DonateCard
            activeOpacity={0.8}
            onPress={() => handleSelect("pix")}
            selected={selectedOption === "pix"}
          >
            <Image
              source={require("../../assets/images/copiar-e-colar.png")}
              style={{ width: 50, height: 50 }}
            />
            <DonateText>Pix {"\n"}Copia e Cola</DonateText>
          </DonateCard>

          {/* QR CODE */}
          <DonateCard
            activeOpacity={0.8}
            onPress={() => handleSelect("qrcode")}
            selected={selectedOption === "qrcode"}
          >
            <Image
              source={require("../../assets/images/escaneamento-de-codigo.png")}
              style={{ width: 50, height: 50 }}
            />
            <DonateText>Pix {"\n"}QR Code</DonateText>
          </DonateCard>

          {/* BMC */}
          <DonateCard
            activeOpacity={0.8}
            onPress={() => handleSelect("bmc")}
            selected={selectedOption === "bmc"}
          >
            <Image
              source={require("../../assets/images/buymeacoffe.png")}
              style={{ width: 50, height: 50 }}
            />
            <DonateText>Buy Me {"\n"}a Coffee</DonateText>
          </DonateCard>
        </DonateRow>

        {/* 🔽 PIX */}
        {selectedOption === "pix" && (
          <ExpandContainer>
            <Description>Copie o código Pix:</Description>

            <Input
              value={pixCopiaCola}
              editable={false}
              multiline
            />

            <Button activeOpacity={0.8} onPress={handleCopyPix}>
              <ButtonText>Copiar código Pix</ButtonText>
            </Button>
          </ExpandContainer>
        )}

        {/* 🔽 QR CODE */}
        {selectedOption === "qrcode" && (
          <ExpandContainer>
            <Description>Escaneie o QR Code:</Description>
            <QRCodeImage
              source={require("../../assets/images/qrcpde-pix.jpeg")}
            />
          </ExpandContainer>
        )}

        {/* 🔽 BUY ME A COFFEE */}
        {selectedOption === "bmc" && (
          <ExpandContainer>
            <Button activeOpacity={0.8} onPress={handleDonate}>
              <ButtonText>Doar via BuyMeACoffee</ButtonText>
            </Button>
          </ExpandContainer>
        )}

        {/* ❌ ESCONDE QUANDO FOR BMC */}
        {selectedOption !== "bmc" && (
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
        )}

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