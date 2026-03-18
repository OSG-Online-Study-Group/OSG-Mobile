import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2C173C;
  padding: 30px 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
  margin-top: 20px;
`;

export const Subtitle = styled.Text`
  color: #A086CC;
  font-size: 14px;
  text-align: center;
  margin-bottom: 30px;
`;

export const GrupoCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => (props.selected ? "#6A1B9A" : "#3A1F54")};
  border-radius: 16px;
  padding: 16px 20px;
  margin-bottom: 14px;
  border-width: 2px;
  border-color: ${(props) => (props.selected ? "#B84EF2" : "transparent")};
`;

export const GrupoEmoji = styled.Text`
  font-size: 28px;
  margin-right: 14px;
`;

export const GrupoNome = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  flex: 1;
`;

export const CheckIcon = styled.Text`
  font-size: 20px;
  color: #B84EF2;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => (props.disabled ? "#555" : "#B84EF2")};
  border-radius: 20px;
  padding: 14px;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const ErrorText = styled.Text`
  color: #FF6B6B;
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
`;