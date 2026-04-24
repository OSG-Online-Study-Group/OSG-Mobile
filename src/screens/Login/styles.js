import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image`
width: 360px;
  height: 360px;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #42a4c5;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  border-radius: 20px;
  background-color: #724274;
  width: 80%;
  padding: 13px;
  margin: 10px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  background-color: #42a4c5;
  border-radius: 25px;
  width: 50%;
  margin-top: 20px;
  padding: 12px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #42254e;
  font-size: 16px;
  font-weight: bold;
`;

export const Label = styled.Text`
  width: 80%;
  color: #42a4c5;
  font-size: 14px;
  margin-top: 10px;
`;