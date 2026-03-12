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
  width: 150px;
  height: 150px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackText = styled.Text`
  color: #c9a2ff;
  font-size: 16px;
`;

/* ===== BANNER EXATAS ===== */
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

export const BannerBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.35;
`;

export const BannerText = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: bold;
`;

/* ===== OPÇÕES ===== */
export const OptionButton = styled.TouchableOpacity`
  width: 100%;
  height: 65px;
  background-color: #FFFFFF;
  border-radius: 35px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  elevation: 4;
`;

export const OptionText = styled.Text`
  font-size: 23px;
  color: #000;
  font-weight: 500;
`;

export const OptionIcon = styled.Image`
  width: 40px;
  height: 40px;
`;
