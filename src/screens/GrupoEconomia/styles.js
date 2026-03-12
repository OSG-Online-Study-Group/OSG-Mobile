import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2c173c;
  padding-top: 40px;
`;

export const TopBar = styled.View`
  align-items: center;
  padding: 10px;
  background-color: #2c173c;
`;

export const Title = styled.Text`
  color: #b84ef2;
  font-size: 20px;
  font-weight: bold;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
`;

export const TopBarTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`;

export const MessageBubble = styled.View`
  background-color: ${(props) => (props.isUser ? "#6E3CBC" : "#8D5CF6")};
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  border-radius: 12px;
  margin-vertical: 6px;
  padding: 10px 14px;
  max-width: 80%;
  position: relative;
`;

export const MessageText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #2c173c;
  padding: 10px;
  margin: 10px;
  border-radius: 30px;
  border-width: 1px;
  border-color: #4b2e83;
  margin-bottom: 25px;
`;

export const Input = styled.TextInput`
  flex: 1;
  background-color: transparent;
  padding: 10px 15px;
  color: #fff;
  font-size: 14px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #a020f0;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export const SendButton = styled.TouchableOpacity`
  background-color: #a020f0;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

export const Logo = styled.Image`
width: 50px;
height: 50px;
`

export const OptionText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 15px;
  left: -160px;
  bottom: -20px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-bottom: 10px;
  margin-left: -10px;
  margin-top: -15px;
`;

export const Image = styled.Image`
right: -160px;
height: 40px;
width: 40px;
top: -30px;
`

export const BottomMenu = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #3a1f54;
  padding: 10px 0;
  border-top-width: 1px;
  border-color: #4b2e83;
  margin-bottom: 25px;
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