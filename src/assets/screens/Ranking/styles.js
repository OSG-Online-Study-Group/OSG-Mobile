import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2c173c;
  padding-top: 50px;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 170px;
  height: 170px;
  margin-left: 60px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 10px;
`;

export const BackText = styled.Text`
  color: #b84ef2;
  font-size: 16px;
`;

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  color: #b84ef2;
  font-size: 27px;
  font-weight: bold;
  margin: 30px 25px;
`;

export const Card = styled.TouchableOpacity`
  width: 85%;
  background-color: #3a1f54;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 25px;

  flex-direction: row;
  align-items: center;

  shadow-color: #000;
  shadow-opacity: 0.35;
  shadow-radius: 6px;
  elevation: 6;
`;

export const CardIcon = styled.Image`
  width: 70px;
  height: 70px;
  margin-right: 20px;
`;

export const CardText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;
