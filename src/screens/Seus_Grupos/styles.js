import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2b0d3f;
`;

export const Header = styled.View`
  background-color: #34124f;
  padding-top: 50px;
  padding-bottom: 25px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  align-items: center;
`;

export const TopRow = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: #d85bff;
  font-size: 22px;
  font-weight: bold;
`;

export const MenuIcon = styled.Image`
  width: 28px;
  height: 20px;
`;

export const ProfileIcon = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;

export const SearchBar = styled.TextInput`
  width: 80%;
  height: 38px;
  margin-top: 15px;
  background-color: #3d1a5f;
  border-radius: 20px;
  padding-left: 15px;
  color: white;
`;

export const SectionTitle = styled.Text`
  color: #d85bff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
`;

export const GroupCard = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: #6c5a7e;

  margin: 10px 20px;

  padding: 18px;

  border-radius: 25px;

  shadow-color: #000;
  shadow-opacity: 0.3;
  shadow-radius: 10px;

  elevation: 8;
`;

export const GroupIcon = styled.Image`
  width: 55px;
  height: 55px;
  margin-right: 15px;
`;

export const GroupContent = styled.View`
  flex: 1;
`;

export const GroupTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const GroupMessage = styled.Text`
  color: #ddd;
  font-size: 14px;
  margin-top: 5px;
`;

export const TimeText = styled.Text`
  color: #ddd;
  font-size: 12px;
`;

export const BottomMenu = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: #3a1f54;

  padding: 14px 0;

  border-radius: 20px;

  margin: 15px;
`;

export const MenuButton = styled.TouchableOpacity`
  align-items: center;
`;

export const MenuText = styled.Text`
  color: white;
  font-size: 11px;
  margin-top: 3px;
`;

export const CenterButton = styled.View`
  background-color: #6a2cff;

  width: 55px;
  height: 55px;

  border-radius: 28px;

  align-items: center;
  justify-content: center;

  margin-top: -30px;
`;