import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image`
  margin-top: 20px;
  width: 300px;
  height: 300px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #42A4C5;
  margin-bottom: 45px;
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

export const Label = styled.Text`
width: 85%;
color: #42a4c5;
font-size: 14px;
margin-top: 0px;
margin-bottom: -5px;
margin-left: 60px;
gap: 30px;
`