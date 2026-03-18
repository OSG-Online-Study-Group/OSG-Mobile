import React from "react";
import { Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Header,
  LeftHeader,
  Logo,
  BackButton,
  BackText,
  TopBox,
  Title,
  SubTitle,
  TopUsers,
  TopUser,
  Crown,
  AvatarTop,
  UsernameTop,
  PointsTop,
  ListCard,
  Avatar,
  Username,
  Points
} from "./styles";

const data = [
  { id: "1", name: "McLovin", points: "6.240 PTS", avatar: require("../../assets/images/icon_OSG.jpg") },
  { id: "2", name: "McLovin", points: "6.240 PTS", avatar: require("../../assets/images/icon_OSG.jpg") },
  { id: "3", name: "McLovin", points: "6.240 PTS", avatar: require("../../assets/images/icon_OSG.jpg") },
  { id: "4", name: "McLovin", points: "6.240 PTS", avatar: require("../../assets/images/icon_OSG.jpg") },
  { id: "5", name: "McLovin", points: "6.240 PTS", avatar: require("../../assets/images/icon_OSG.jpg") }
];

export default function RankUsuarios() {

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


      <TopBox>

        <Title>ranking de Usuario</Title>
        <SubTitle>Matematica</SubTitle>

        <TopUsers>

          {/* 2 lugar */}
          <TopUser>

            <AvatarTop
              source={require("../../assets/images/icon_OSG.jpg")}
            />

            <UsernameTop>McLovin</UsernameTop>
            <PointsTop>6.240 PTS</PointsTop>

          </TopUser>


          {/* 1 lugar */}
          <TopUser>

            <Crown
              source={require("../../assets/images/crown.png")}
            />

            <AvatarTop
              source={require("../../assets/images/icon_OSG.jpg")}
            />

            <UsernameTop>McLovin</UsernameTop>
            <PointsTop>6.240 PTS</PointsTop>

          </TopUser>


          {/* 3 lugar */}
          <TopUser>

            <AvatarTop
              source={require("../../assets/images/icon_OSG.jpg")}
            />

            <UsernameTop>McLovin</UsernameTop>
            <PointsTop>6.240 PTS</PointsTop>

          </TopUser>

        </TopUsers>

      </TopBox>


      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (

          <ListCard>

            <Avatar source={item.avatar} />

            <Username>{item.name}</Username>

            <Points>{item.points}</Points>

          </ListCard>

        )}
      />

    </Container>
  );
}