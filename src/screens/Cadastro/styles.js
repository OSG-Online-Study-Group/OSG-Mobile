import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2C173C;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image`
  margin-top: 40px;
  width: 400px;
  height: 400px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #42A4C5;
  margin-bottom: 40px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  width: 80%;
  background-color: #724274;
  padding: 15px;
  border-radius: 20px;
  margin: 12px;
  font-size: 15px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  background-color: #42A4C5;
  border-radius: 25px;
  padding: 12px;
  margin: 20px;
  width: 40%;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #42254E;
  text-align: center;
  font-weight: bold;
`;