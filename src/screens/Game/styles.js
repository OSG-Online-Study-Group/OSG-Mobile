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
  margin-left: px;
  margin-top: -1px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-left: 50px;
  margin-top: 20px;
`;

export const GameOption = styled.TouchableOpacity`
  background-color: #2a0d4d;
  border-radius: 00px;
  width: 380px;
  padding: 15px;
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  right: -10px;
`;

export const OptionText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 15px;
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
margin-left: 30px;
`

export const Text2 = styled.Text`
text-align: center;
left: 20px;
font-size: 20px;
color: white;
z-index: 1;
`

export const Text3 = styled.Text`
margin-left: 15px;
font-size: 20px;
color: white;
`