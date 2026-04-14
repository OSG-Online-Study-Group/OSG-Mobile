import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
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
  margin-left: 120px;
  margin-top: 5px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackText = styled.Text`
  color: #c9a2ff;
  font-size: 17px;
`;

/* 🔥 CARD no estilo antigo (centralizado) */
export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  background-color: #4B2A66;
  border-radius: 22px;
  margin-bottom: 25px;

  justify-content: center;
  align-items: center;
`;

/* 🔥 Ícone centralizado acima do texto */
export const Icon = styled.Image`
  width: 45px;
  height: 45px;
  margin-bottom: 8px;
`;

/* 🔥 Texto padrão */
export const CardText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

/* 🔥 Mantive só por compatibilidade (sem posição quebrada) */
export const CardText2 = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardText3 = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;