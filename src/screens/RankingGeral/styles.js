import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2c173c;
  padding-top: 50px;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 110px;
  background-color: #3a1f54;

  padding: 0 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const LeftHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
  margin-left: 50px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 10px;
`;

export const BackText = styled.Text`
  color: #b84ef2;
  font-size: 18px;
`;

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  color: #b84ef2;
  font-size: 28px;
  font-weight: bold;
  margin: 25px 0;
`;

export const Card = styled.TouchableOpacity`
  width: 85%;
  height: 80px;

  background-color: #8e2de2;

  border-radius: 40px;

  margin-bottom: 18px;

  flex-direction: row;
  align-items: center;

  padding-left: 10px;
`;

export const IconCircle = styled.View`
  width: 70px;
  height: 70px;

  border-radius: 35px;

  background-color: #5b2a86;

  justify-content: center;
  align-items: center;

  margin-right: 15px;
`;

export const CardIcon = styled.Image`
  width: 40px;
  height: 40px;
`;

export const TextContainer = styled.View`
  flex-direction: column;
`;

export const CardText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const Points = styled.Text`
  color: #220c30;
  font-size: 13px;
  font-weight: bold;
`;

export const Crown = styled.Image`
  width: 28px;
  height: 28px;
  position: absolute;
  top: -18px;
  left: 5px;
`;