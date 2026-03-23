import styled from "styled-components/native";
import { ScrollView } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #2C173C;
  padding: 20px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const MenuIcon = styled.Image`
  width: 28px;
  height: 28px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  color: #C644E0;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackText = styled.Text`
  color: #C644E0;
  font-size: 16px;
`;

export const QuestionCard = styled.View`
  width: 100%;
  background-color: #8A3DE3;
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
  background-color: #4C2D6F;
  padding: 12px;
  border-radius: 15px;
  margin: 0 10px;
`;

export const MessageText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const LifeBox = styled.View`
  align-items: center;
  margin-bottom: 8px;
`;

export const LifeNumber = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`;

export const LifeLabel = styled.Text`
  color: #aaa;
`;

export const LifeBar = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  margin-left: 110px;
`;

export const LifeSegment = styled.View`
  width: 25px;
  height: 16px;
  background-color: #8A3DE3;
  border-radius: 8px;
  margin-right: 6px;
`;

export const InputRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 25px;
  padding: 5px 10px;
  margin-bottom: 25px;
`;

export const TextInputStyled = styled.TextInput`
  flex: 1;
  padding-left: 10px;
  font-size: 16px;
`;

export const SendButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const SendIcon = styled.Image`
  width: 28px;
  height: 28px;
`;

export const BottomTabs = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: #502473;
  padding: 10px 15px;
  border-radius: 20px;
`;

export const TabItem = styled.TouchableOpacity`
  align-items: center;
`;

export const TabIcon = styled.Image`
  width: 22px;
  height: 22px;
`;

export const TabLabel = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-top: 5px;
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

export const BottomMenu = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #3a1f54;
  padding: 10px 0;
  border-top-width: 1px;
  border-color: #4b2e83;
  margin-bottom: 15px;
  border-radius: 20px;
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