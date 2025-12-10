import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
  align-items: center;
  padding-top: 50px;
`;

export const Header = styled.View`
  width: 90%;
  margin-bottom: 30px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-bottom: 10px;
  margin-left: -10px;
  margin-top: -15px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-left: 35px;
  margin-top: 20px;
`;

export const GameOption = styled.TouchableOpacity`
  background-color: #2a0d4d;
  border-radius: 20px;
  width: 90%;
  padding: 20px;
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const OptionText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 15px;
`;

export const BottomMenu = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #3a1f54;
  padding: 10px 0;
  border-top-width: 1px;
  border-color: #4b2e83;
  margin-bottom: 25px;
  margin-top: 25px;
  gap: 50px;
  border-radius: 15px;
`;

export const MenuButton = styled.TouchableOpacity`
  align-items: center;
  opacity: ${(props) => (props.active ? 1 : 0.7)};
`;

export const MenuText = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-top: 2px;
`;

export const Text = styled.Text`
color: white;
font-size: 20px;
margin-left: 37px;
`

export const Text2 = styled.Text`
text-align: center;
left: -235px;
font-size: 20px;
color: white;
z-index: 1;
`

export const Text3 = styled.Text`
margin-left: 15px;
font-size: 20px;
color: white;
`