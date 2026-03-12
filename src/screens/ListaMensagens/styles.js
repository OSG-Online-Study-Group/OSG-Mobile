import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2c173c;
  padding-top: 40px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 5px;
`;

export const SearchArea = styled.View`
  flex: 1;
  background-color: #3a1f54;
  border-radius: 20px;
  height: 30px;
  margin: 0 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  color: #b84ef2;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MessageRequest = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 20px;
  background-color: #3a1f54;
`;

export const MessageRequestText = styled.Text`
  color: #fff;
  margin-left: 10px;
  font-size: 14px;
`;

export const Divider = styled.View`
  height: 2px;
  background-color: #652b9c;
  margin-vertical: 8px;
`;

export const ChatItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
`;

export const ChatInfo = styled.View`
  flex: 1;
  border-bottom-width: 0.5px;
  border-color: #4b2e83;
  padding-bottom: 10px;
`;

export const ChatName = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const ChatTime = styled.Text`
  color: #aaa;
  font-size: 12px;
  position: absolute;
  right: 0;
`;

export const ChatMessage = styled.Text`
  color: #c5aaff;
  font-size: 13px;
  margin-top: 4px;
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
