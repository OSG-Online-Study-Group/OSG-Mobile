import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #2C173C;
justify-content: center;
align-items: center;
padding: 20px;
`
export const Logo = styled.Image`
margin-top: -90px;
`

export const Title = styled.Text`
font-size: 30px;
color: #42A4C5;
margin-bottom: 50px;
margin-top: -60px;
`
export const Input = styled.TextInput`
  width: 80%;
  background-color: #724274;
  padding: 15px;
  border-radius: 20px;
  margin: 15px;
  font-size: 15px;
`

export const Button = styled.TouchableOpacity`
background-color: #42A4C5;
border-radius: 20px;
padding: 10px;
margin: 15px;
width: 30%;
`

export const ButtonText = styled.Text`
font-size: 16px;
color: #724274;
text-align: center;
`