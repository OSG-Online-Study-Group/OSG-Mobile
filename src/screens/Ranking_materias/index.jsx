import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Header,
  LeftHeader,
  Logo,
  BackButton,
  BackText,
  Title,
  Card,
  IconCircle,
  CardIcon,
  CardText,
  TextContainer,
  Points,
  Crown
} from "./styles";

export default function RankingMaterias() {

  const navigation = useNavigation();

  return (
    <Container>

      <Header>

        <LeftHeader>

          <Image
            source={require("../../assets/images/libras.jpg")}
            style={{ width: 40, height: 40 }}
          />

          <Logo source={require("../../assets/images/icon_OSG.jpg")} />

        </LeftHeader>

        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>

      </Header>

      <Title>ranking de Matérias</Title>


      {/* 1 */}
      <Card>

        <IconCircle>

          <Crown
            source={require("../../assets/images/crown.png")}
          />

          <CardIcon
            source={require("../../assets/images/matematica.png")}
          />

        </IconCircle>

        <TextContainer>

          <CardText>Matemática</CardText>
          <Points>12.500 PTS</Points>

        </TextContainer>

      </Card>


      {/* 2 */}
      <Card>

        <IconCircle>
          <CardIcon
            source={require("../../assets/images/sociologia.png")}
          />
        </IconCircle>

        <TextContainer>

          <CardText>Sociologia</CardText>
          <Points>10.500 PTS</Points>

        </TextContainer>

      </Card>


      {/* 3 */}
      <Card>

        <IconCircle>
          <CardIcon
            source={require("../../assets/images/biologia.png")}
          />
        </IconCircle>

        <TextContainer>

          <CardText>Biologia</CardText>
          <Points>9.300 PTS</Points>

        </TextContainer>

      </Card>


      {/* 4 */}
      <Card>

        <IconCircle>
          <CardIcon
            source={require("../../assets/images/quimica.png")}
          />
        </IconCircle>

        <TextContainer>

          <CardText>Quimica Florense</CardText>
          <Points>7.500 PTS</Points>

        </TextContainer>

      </Card>


      {/* 5 */}
      <Card>

        <IconCircle>
          <CardIcon
            source={require("../../assets/images/informatica.png")}
          />
        </IconCircle>

        <TextContainer>

          <CardText>Informatica</CardText>
          <Points>6.240 PTS</Points>

        </TextContainer>

      </Card>


      {/* 6 */}
      <Card>

        <IconCircle>
          <CardIcon
            source={require("../../assets/images/algebra.png")}
          />
        </IconCircle>

        <TextContainer>

          <CardText>Algebra</CardText>
          <Points>5.500 PTS</Points>

        </TextContainer>

      </Card>

    </Container>
  );
}