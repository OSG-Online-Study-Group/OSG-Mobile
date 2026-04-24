import styled from "styled-components/native";
import { ScrollView } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
  padding: 20px;
`;

/* SCROLL */
export const ContentScroll = styled(ScrollView)`
  flex: 1;
`;

/* HEADER */
export const Header = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  position: relative;
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  color: #c644e0;
  font-size: 20px;
  font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  z-index: 1;
`;

export const BackText = styled.Text`
  color: #c644e0;
  font-size: 16px;
`;

/* CARDS */
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

/* OPÇÕES */
export const OptionButton = styled.TouchableOpacity`
  background-color: ${(props) => props.background || "#4c2d6f"};
  margin: 6px 20px;
  padding: 14px;
  border-radius: 12px;
  align-items: center;
`;

export const OptionText = styled.Text`
  color: #fff;
  font-size: 15px;
`;

/* STATUS */
export const StatusBox = styled.View`
  margin: 12px 20px;
  align-items: center;
`;

export const StatusText = styled.Text`
  color: #A086CC;
  font-size: 14px;
  text-align: center;
  line-height: 22px;
`;

/* NAVBAR */
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