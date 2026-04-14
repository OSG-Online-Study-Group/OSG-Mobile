import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
  padding-top: 40px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 16px;
`;

export const Title = styled.Text`
  color: #B84EF2;
  font-size: 22px;
  font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackText = styled.Text`
  color: #C67AFC;
  font-size: 16px;
`;

export const SearchBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 20px 16px;
  background-color: #3a1f54;
  border-radius: 25px;
  padding: 0 12px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  color: #fff;
  padding: 12px 8px;
  font-size: 15px;
`;

export const SearchButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const UserCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #2c173c;
  margin: 6px 20px;
  padding: 14px 16px;
  border-radius: 16px;
  border-width: 1px;
  border-color: #4b2e83;
`;

export const UserInfo = styled.View`
  flex: 1;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const UserLevel = styled.Text`
  color: #A086CC;
  font-size: 13px;
  margin-top: 2px;
`;

export const DesafiarButton = styled.TouchableOpacity`
  background-color: #6a2cff;
  padding: 10px 16px;
  border-radius: 20px;
`;

export const DesafiarText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const StatusText = styled.Text`
  text-align: center;
  margin: 8px 20px;
  font-size: 14px;
  color: ${(props) => (props.error ? "#ff4d6d" : "#2f9e44")};
`;

export const EmptyText = styled.Text`
  text-align: center;
  color: #A086CC;
  margin-top: 30px;
  font-size: 15px;
`;