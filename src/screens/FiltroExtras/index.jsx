import React from "react";
import {
  Container,
  Header,
  Logo,
  HeaderCenterIcon,
  BackButton,
  BackText,
  Banner,
  BannerBackground,
  BannerText,
  OptionButton,
  OptionIcon,
  BannerImage
} from "./styles";
  import { useNavigation } from "@react-navigation/native";

export default function FiltroExtras({ navigation }) {
  
  return (
    <Container>

      {/* ===== HEADER ===== */}
      <Header>
        <Logo source={require("../../assets/images/libras.jpg")} />

        <HeaderCenterIcon
          source={require("../../assets/images/icon_OSG.jpg")}
        />

        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      {/* ===== BANNER EXTRAS ===== */}
      <Banner>
        <BannerImage source={require("../../assets/images/Extras.jpg")} />
        <BannerText>Extras</BannerText>
      </Banner>

      {/* ===== LISTAGEM ===== */}

      <OptionButton>
        <OptionIcon source={require("../../assets/images/enem.jpg")} />
      </OptionButton>

      <OptionButton>
        <OptionIcon source={require("../../assets/images/vunesp.jpg")} />
      </OptionButton>

      <OptionButton>
        <OptionIcon source={require("../../assets/images/fuvest.jpg")} />
      </OptionButton>

      <OptionButton>
        <OptionIcon source={require("../../assets/images/unicamp.jpg")} />
      </OptionButton>

    </Container>
  );
}
