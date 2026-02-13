import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2C173C;
  padding: 20px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
`;

export const HeaderCenterIcon = styled.Image`
  width: 130px;
  height: 130px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackText = styled.Text`
  color: #c9a2ff;
  font-size: 17px;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  background-color: #4B2A66;
  border-radius: 22px;
  margin-bottom: 25px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const CardBackground = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.35;
`;

export const CardText = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;

export const CardBackground2 = styled.ImageBackground`
width: 100px;
height: 70px;
left: -40px;
bottom: -20px;
`

export const CardText2 = styled.Text`
color: #fff;
font-size: 26px;
font-weight: bold;
text-align: center;
bottom: 30px;
right: -35px;
`

export const CardBackground3 = styled.ImageBackground`
width: 100px;
height: 100px;
left: -75px;
bottom: -25px;
`
export const CardText3 = styled.Text`
color: #fff;
font-size: 26px;
font-weight: bold;
text-align: center;
bottom: 45px;
right: -45px;
`
