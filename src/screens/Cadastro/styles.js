import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 260px;
  height: 260px;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #42a4c5;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  width: 80%;
  background-color: #724274;
  padding: 14px;
  border-radius: 20px;
  margin: 10px;
  font-size: 15px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  background-color: #42a4c5;
  border-radius: 25px;
  padding: 12px;
  margin-top: 20px;
  width: 50%;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #42254e;
  font-weight: bold;
`;

export const Label = styled.Text`
  width: 80%;
  color: #42a4c5;
  font-size: 14px;
  margin-top: 10px;
`;