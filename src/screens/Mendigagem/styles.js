import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 100px;
  background-color: #2a0a4a;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Logo = styled.Image`
  width: 90px;
  height: 90px;
  margin-top: 15px;
`;

export const CardIntro = styled.View`
  width: 100%;
  background-color: #6a11cb;
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: white;
  font-size: 15px;
  margin-top: 10px;
`;

export const DonateRow = styled.View`
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
`;

export const DonateCard = styled.TouchableOpacity`
  flex: 1;
  margin: 0 5px;
  height: 150px;
  background-color: ${(props) =>
    props.selected ? "#42A4C5" : "#6a11cb"};
  border-radius: 20px;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    props.selected ? "2px solid #ffffff" : "none"};
`;

export const DonateText = styled.Text`
  color: white;
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
`;

/* 🔽 CONTAINER EXPANSÍVEL */
export const ExpandContainer = styled.View`
  width: 95%;
  background-color: #6a11cb;
  border-radius: 15px;
  padding: 15px;
  margin-top: 15px;
  align-items: center;
`;

export const PixText = styled.Text`
  color: #fff;
  margin-top: 10px;
  font-size: 12px;
  text-align: center;
`;

export const QRCodeImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 10px;
`;

export const InputContainer = styled.View`
  width: 100%;
  background-color: #6a11cb;
  border-radius: 20px;
  padding: 15px;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  background-color: #3b0f66;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
  color: white;
  height: 100px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #42A4C5;
  margin-top: 10px;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 16px;
`;

export const ButtonSecondary = styled.TouchableOpacity`
  width: 30%;
  background-color: transparent;
  margin-top: 95px;
  padding: 15px;
  border-radius: 50px;
  margin-left: 130px;
  border: 1px solid #444245;
`;

export const ButtonSecondaryText = styled.Text`
  color: #444245;
  font-weight: bold;
  font-size: 16px;
`;