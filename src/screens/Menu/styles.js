import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
  align-items: center;
  justify-content: flex-start;
  padding-top: 40px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Title = styled.Text`
  color: #d36df3;
  font-size: 24px;
  font-weight: bold;
`;

export const MenuIcon = styled.Image`
  width: 30px;
  height: 24px;
`;

export const ProfileIcon = styled.Image`
  width: 35px;
  height: 35px;
`;

export const SearchBar = styled.TextInput`
  width: 85%;
  height: 40px;
  margin: 20px 0;
  background-color: #2a0d4d;
  border-radius: 20px;
  padding: 0 15px;
  color: white;
`;

export const Banner = styled.Image`
  width: 90%;
  height: 210px;
  border-radius: 15px;
  margin-bottom: 25px;
`;

export const SectionTitle = styled.Text`
  color: #b060f0;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const GroupItem = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #3b0f66;
  width: 97%;
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 10px;
  margin: 8px;
`;

export const GroupText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`;

export const BottomMenu = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #3a1f54;
  padding: 13px 0;
  border-top-width: 1px;
  border-color: #4b2e83;
  margin-bottom: 25px;
  border-radius: 15px;
  gap: 45px;
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
