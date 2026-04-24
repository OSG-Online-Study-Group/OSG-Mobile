import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2b0d3f;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 220px;
`;

export const ProfileImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  align-self: center;
  margin-top: -45px;
  border-width: 4px;
  border-color: #ff2f92;
`;

export const Button = styled.TouchableOpacity`
  align-self: center;
  border: 1px solid #c56fff;
  border-radius: 20px;
  padding: 8px 20px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;

export const ThemeSelector = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const ThemeCircle = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border-radius: 25px;
  margin: 0 8px;
  background-color: ${(props) => props.color || "#3a1f54"};
  border: ${(props) => (props.active ? "3px solid white" : "none")};
`;
export const Section = styled.View`
  padding: 20px;
`;

export const SectionTitle = styled.Text`
  color: #d36df3;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  background-color: #2a0d4d;
  border-radius: 15px;
  padding: 12px;
  color: #fff;
`;

export const FooterButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: #5b3d79;
  padding: 10px 20px;
  border-radius: 20px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: #7b3df5;
  padding: 10px 20px;
  border-radius: 20px;
`;

export const FooterText = styled.Text`
  color: white;
`;