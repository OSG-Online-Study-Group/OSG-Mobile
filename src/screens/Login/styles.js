import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const Logo = styled.Image`
  margin-top: 40px;
  width: 400px;
  height: 400px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #42a4c5;
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  border-radius: 20px;
  background-color: #724274;
  width: 75%;
  padding: 13px;
  margin: 13px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  background-color: #42a4c5;
  border-radius: 25px;
  width: 40%;
  margin: 20px;
  padding: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #42254e;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;
