import styled from "styled-components/native";

/* CONTAINER PRINCIPAL */
export const Container = styled.View`
  flex: 1;
  background-color: #2C173C;
  padding: 20px;
`;

/* ===== HEADER ===== */
export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  font-size: 16px;
`;

/* ===== BANNER ===== */
export const Banner = styled.View`
  width: 100%;
  height: 130px;
  background-color: #4B2A66;
  border-radius: 22px;
  overflow: hidden;
  margin-bottom: 28px;
  padding-left: 20px;
  justify-content: center;
`;

export const BannerBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  opacity: 0.25;
  position: absolute;
`;

export const BannerTitle = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  left: -10px;
`;

export const BannerIcon = styled.Image`
  width: 55px;
  height: 55px;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

/* ===== LISTA ===== */
export const OptionButton = styled.TouchableOpacity`
  width: 100%;
  height: 62px;
  background-color: #FFFFFF;
  border-radius: 35px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  elevation: 4;
`;

export const OptionText = styled.Text`
  font-size: 20px;
  color: #1a1a1a;
  font-weight: bold;
`;

export const OptionIcon = styled.Image`
  width: 40px;
  height: 40px;
  resize-mode: contain;
`;
