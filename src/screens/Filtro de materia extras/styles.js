import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2C173C;
  padding: 20px;
`;

/* ===== HEADER ===== */
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
  width: 140px;
  height: 140px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackText = styled.Text`
  color: #c9a2ff;
  font-size: 17px;
`;

/* ===== BANNER ===== */
export const Banner = styled.View`
  width: 100%;
  height: 120px;
  background-color: #4B2A66;
  border-radius: 22px;
  overflow: hidden;
  margin-bottom: 25px;
  justify-content: center;
  align-items: center;
`;

export const BannerText = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  bottom: 40px;
  right: -30px;
`;

export const BannerImage = styled.Image`
left: -50px;
bottom: -20px;
`

/* ===== OPÇÕES ===== */
export const OptionButton = styled.TouchableOpacity`
  width: 100%;
  height: 65px;
  background-color: #FFFFFF;
  border-radius: 35px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  elevation: 4;
  padding: 38px;
`;

export const OptionIcon = styled.Image`
  width: 150px;
  height: 150px;
  resize-mode: contain;
`;
