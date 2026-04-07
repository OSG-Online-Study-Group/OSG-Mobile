import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

// Cores principais
const colors = {
  background: "#2c173c",
  primary: "#8a3de3",
  secondary: "#4c2d6f",
  accent: "#c644e0",
  white: "#ffffff",
  gold: "#ffd166",
};

// Container principal
export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  padding: 20px;
`;

// Header
export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding:  20px;
`;

// Botão de voltar
export const BackButton = styled.TouchableOpacity`
  padding: 8px;

`;

export const BackText = styled.Text`
  color: ${colors.accent};
  font-size: 16px;
  font-weight: 500;
`;

// Título da tela
export const Title = styled.Text`
  color: ${colors.accent};
  font-size: 26px;
  font-weight: bold;
`;

// Badge de matéria com gradiente
export const SubjectBadge = styled(LinearGradient).attrs({
  colors: [colors.primary, colors.accent],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  border-radius: 20px;
  align-self: flex-start;
  padding: 8px 16px;
  margin-bottom: 16px;
`;

export const SubjectText = styled.Text`
  color: ${colors.white};
  font-size: 13px;
  font-weight: bold;
`;

// Card da pergunta com sombra
export const QuestionCard = styled.View`
  background-color: ${colors.secondary};
  border-radius: 22px;
  padding: 20px;
  margin-bottom: 18px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  elevation: 6;
`;

export const QuestionText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  line-height: 28px;
`;

// Opções de resposta com efeito de toque
export const OptionButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${(props) => props.background || colors.secondary};
  border-radius: 18px;
  padding: 14px;
  margin-bottom: 12px;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 3;
`;

export const OptionText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  line-height: 22px;
`;

// Box de status
export const StatusBox = styled.View`
  margin-top: 14px;
  background-color: ${colors.secondary};
  border-radius: 18px;
  padding: 14px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.15;
  shadow-radius: 4px;
  elevation: 2;
`;

export const StatusText = styled.Text`
  color: ${colors.white};
  font-size: 15px;
`;

export const PointsText = styled.Text`
  color: ${colors.gold};
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`;

// Botão de ação com gradiente e sombra
export const ActionButton = styled(LinearGradient).attrs({
  colors: [colors.primary, colors.accent],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  margin-top: 20px;
  border-radius: 20px;
  padding: 14px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  elevation: 5;
`;

export const ActionButtonText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`;