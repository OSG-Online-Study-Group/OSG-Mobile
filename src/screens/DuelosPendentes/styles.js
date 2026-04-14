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
  margin-right: 90px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackText = styled.Text`
  color: #C67AFC;
  font-size: 16px;
`;

export const DueloCard = styled.View`
  background-color: #2c173c;
  margin: 8px 20px;
  padding: 16px;
  border-radius: 16px;
  border-width: 1px;
  border-color: #4b2e83;
  gap: 12px;
`;

export const DueloInfo = styled.View``;

export const DueloNome = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const DueloData = styled.Text`
  color: #A086CC;
  font-size: 13px;
  margin-top: 4px;
`;

export const ActionRow = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const AcceptButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #2f9e44;
  padding: 12px;
  border-radius: 20px;
  align-items: center;
`;

export const RecusarButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #c92a2a;
  padding: 12px;
  border-radius: 20px;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export const EmptyText = styled.Text`
  text-align: center;
  color: #A086CC;
  margin-top: 40px;
  font-size: 15px;
`;