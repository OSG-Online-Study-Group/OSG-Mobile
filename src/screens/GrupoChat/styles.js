import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight + "px" : "40px"};
`;

/* ================= TOPO ================= */

export const TopBar = styled.View`
  align-items: center;
  padding: 15px;
  background-color: #1f0236;

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const Title = styled.Text`
  color: #b84ef2;
  font-size: 20px;
  font-weight: bold;
  margin-left: 170px;
`;

export const TopRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBar = styled.TextInput`
  background-color: #3a1f54;
  width: 80%;
  margin-top: 10px;
  border-radius: 20px;
  padding: 8px 15px;
  color: #fff;
`;

/* ================= HEADER ================= */

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

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
`;

/* ================= CHAT ================= */

export const MessageBubble = styled.View`
  background-color: ${(props) => (props.isUser ? "#6E3CBC" : "#8D5CF6")};
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  border-radius: 12px;
  margin-vertical: 6px;
  padding: 10px 14px;
  max-width: 85%;
  flex-shrink: 1;
`;

export const MessageText = styled.Text`
  color: #fff;
  font-size: 14px;
  flex-wrap: wrap;
`;

/* INPUT */
export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #2c173c;
  padding: 10px;
  width: 90%;
  align-self: center;
  border-radius: 30px;
  border-width: 1px;
  border-color: #4b2e83;
  margin-bottom: 120px;
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

/* ================= VOLTAR / ICONES ================= */

export const OptionText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 15px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  top: 10px;
`;

export const Image = styled.Image`
  position: absolute;
  right: 10px;
  top: 10px;
  height: 40px;
  width: 40px;
`;

/* ================= AVATAR ================= */

export const AvatarWrapper = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || "#6A3BA7"};
`;

export const AvatarImage = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;

export const AvatarText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
`;

/* ================= MENSAGEM ================= */

export const MessageRow = styled.View`
  flex-direction: ${(props) => (props.isUser ? "row-reverse" : "row")};
  align-items: flex-end;
  margin-vertical: 6px;
  margin-horizontal: 17px;
  gap: 9px;
`;

export const MessageWrapper = styled.View`
  max-width: 85%;
  flex-shrink: 1;
`;

export const SenderName = styled.Text`
  color: #a086cc;
  font-size: 11px;
  margin-bottom: 2px;
  margin-left: 4px;
`;

export const MessageMeta = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`;

export const MessageTime = styled.Text`
  color: ${(props) => (props.isUser ? "#D1A8FF" : "#888")};
  font-size: 10px;
`;

export const DeletedMessage = styled.View`
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  margin-vertical: 4px;
  margin-horizontal: 20px;
`;

export const DeletedText = styled.Text`
  color: #666;
  font-style: italic;
  font-size: 13px;
`;

export const DeleteButton = styled.TouchableOpacity`
  margin-left: 8px;
`;

/* ================= NAVBAR ================= */

export const BottomMenu = styled.View`
  position: absolute;
  bottom: 0;
  width: 92%;
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
`;

export const MenuText = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-top: 2px;
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