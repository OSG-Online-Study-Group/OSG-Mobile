import styled from "styled-components/native";
import { ScrollView } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
  padding: 20px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const MenuIcon = styled.Image`
  width: 28px;
  height: 28px;
`;

export const Title = styled.Text`
  color: #c644e0;
  font-size: 22px;
  font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackText = styled.Text`
  color: #c644e0;
  font-size: 16px;
`;

export const QuestionCard = styled.View`
  width: 100%;
  background-color: #8a3de3;
  border-radius: 25px;
  padding: 20px;
  margin-bottom: 25px;
`;

export const QuestionIcon = styled.Image`
  width: 32px;
  height: 32px;
`;

export const QuestionTitle = styled.Text`
  color: #fff;
  font-size: 22px;
  margin-top: 10px;
  font-weight: bold;
`;

export const QuestionText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-top: 10px;
`;

export const ChatArea = styled(ScrollView)`
  flex: 1;
  margin-bottom: 20px;
`;

export const MessageRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 15px;
`;

export const Avatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 30px;
`;

export const MessageBubble = styled.View`
  max-width: 70%;
  background-color: #4c2d6f;
  padding: 12px;
  border-radius: 15px;
  margin: 0 10px;
`;

export const MessageText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

/* INPUT */

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #2c173c;
  padding: 10px;
  margin: 10px;
  border-radius: 30px;
  border-width: 1px;
  border-color: #4b2e83;
  margin-bottom: 110px;
`;

export const Input = styled.TextInput`
  flex: 1;
  color: #fff;
  padding: 10px;
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
  padding: 8px;
`;

/* ================= NAVBAR ================= */

export const BottomMenu = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-self: center;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: #3a1f54;
  padding: 14px 0;
  border-radius: 20px;
  margin-bottom: 25px;
`;

export const MenuButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const MenuText = styled.Text`
  color: white;
  font-size: 11px;
  margin-top: 3px;
`;

export const CenterButton = styled.TouchableOpacity`
  background-color: #6a2cff;
  width: 55px;
  height: 55px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
`;