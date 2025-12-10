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
        <Logo source={require("../../images/libras.jpg")} />

        <HeaderCenterIcon
          source={require("../../images/icon_OSG.jpg")}
        />

        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      {/* ===== BANNER EXTRAS ===== */}
      <Banner>
        <BannerImage source={require("../../images/Extras.jpg")} />
        <BannerText>Extras</BannerText>
      </Banner>

      {/* ===== LISTAGEM ===== */}

      <OptionButton>
        <OptionIcon source={require("../../images/enem.jpg")} />
      </OptionButton>

      <OptionButton>
        <OptionIcon source={require("../../images/vunesp.jpg")} />
      </OptionButton>

      <OptionButton>
        <OptionIcon source={require("../../images/fuvest.jpg")} />
      </OptionButton>

      <OptionButton>
        <OptionIcon source={require("../../images/unicamp.jpg")} />
      </OptionButton>

    </Container>
  );
}
