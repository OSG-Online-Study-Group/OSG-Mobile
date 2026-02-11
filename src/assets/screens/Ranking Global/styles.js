import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1A0D2E;
  padding: 20px;
`;

export const Header = styled.View`
  background-color: #2B1548;
  padding: 25px;
  border-radius: 25px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: #FFFFFF;
  font-size: 26px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 68px;
`;

export const BackText = styled.Text`
   color: #C644E0;
  font-size: 16px;
`;

export const BackButton = styled.Text`
  color: #C8A4FF;
  font-size: 14px;
`;

export const SearchBox = styled.View`
  background-color: #A64CFF;
  flex-direction: row;
  align-items: center;
  padding: 8px 14px;
  border-radius: 6px;
  margin-bottom: 20px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  color: #FFF;
  font-size: 14px;
`;

export const SearchIcon = styled.Text`
  font-size: 18px;
  color: #FFF;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #2B1548;
  padding: 12px;
  border-radius: 16px;
  margin-bottom: 12px;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 12px;
`;

export const Username = styled.Text`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
  flex: 1;
`;

export const Points = styled.Text`
  color: #FF78E8;
  font-size: 16px;
  font-weight: bold;
`;

export const TableHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  margin-bottom: 12px;
`;

export const HeaderText = styled.Text`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 16px;
`;