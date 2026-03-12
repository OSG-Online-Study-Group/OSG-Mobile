import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2C173C;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Card = styled.View`
  width: 90%;
  height: 90%;
  background-color: #502473;
  border-radius: 25px;
  padding: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const BackIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

export const PlayerRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 12px 0;
`;

export const Avatar = styled.Image`
  width: 57px;
  height: 57px;
  border-radius: 30px;
  margin-right: 15px;
`;

export const PlayerName = styled.Text`
  color: #ffffff;
  font-size: 22px;
  font-family: "Roboto";
`;

export const Divider = styled.View`
  width: 100%;
  height: 6px;
  background-color: #8A3DE3;
  margin: 12px 0;
  border-radius: 4px;
`;

export const InviteText = styled.Text`
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  margin-top: 20px;
  font-family: "Roboto";
`;

export const SwordImage = styled.Image`
  width: 110px;
  height: 110px;
  align-self: center;
  margin-top: 10px;
`;
