import styled from "styled-components/native";

// ─── Layout Base ────────────────────────────────────────────────
export const Container = styled.View`
  flex: 1;
  background-color: #1a1033;
  padding-top: 40px;
`;

export const CenterWrapper = styled.View`
  align-items: center;
  margin-top: 20px;
`;

// ─── Header ─────────────────────────────────────────────────────
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 16px;
`;

// Título da tela de Quiz (com botão Voltar ao lado esquerdo)
export const TitleQuiz = styled.Text`
  flex: 1;
  color: #b84ef2;
  font-size: 20px;
  font-weight: bold;
 margin-left: 54px;
`;

// Título da tela de Aguardo (sem botão, ocupa o header inteiro)
export const TitleWaiting = styled.Text`
  flex: 1;
  color: #b84ef2;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

// Título da tela de Resultado (sem botão, ocupa o header inteiro)
export const TitleResult = styled.Text`
  flex: 1;
  color: #b84ef2;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

// ─── Navegação ──────────────────────────────────────────────────
export const BackButton = styled.TouchableOpacity`
  padding: 4px 0;
  min-width: 60px;
`;

export const BackText = styled.Text`
  color: #c67afc;
  font-size: 16px;
`;

// ─── Badge de Adversário ─────────────────────────────────────────
export const SubjectBadge = styled.View`
  align-self: center;
  background-color: #7c3aed;
  padding: 8px 20px;
  border-radius: 25px;
  margin-bottom: 12px;
`;

export const SubjectText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

// ─── Progresso ───────────────────────────────────────────────────
export const ProgressText = styled.Text`
  text-align: center;
  color: #a086cc;
  font-size: 14px;
  margin-bottom: 12px;
`;

// ─── Pergunta ────────────────────────────────────────────────────
export const QuestionCard = styled.View`
  background-color: #2c173c;
  margin: 0 20px 16px;
  padding: 20px;
  border-radius: 16px;
`;

export const QuestionText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
`;

// ─── Alternativas ────────────────────────────────────────────────
export const OptionButton = styled.TouchableOpacity`
  background-color: ${(props) => props.background || "#4c2d6f"};
  margin: 6px 20px;
  padding: 14px 16px;
  border-radius: 12px;
  align-items: center;
`;

export const OptionText = styled.Text`
  color: #fff;
  font-size: 15px;
  text-align: center;
`;

// ─── Status da Resposta ──────────────────────────────────────────
export const StatusBox = styled.View`
  margin: 12px 20px;
  align-items: center;
`;

export const StatusText = styled.Text`
  color: #a086cc;
  font-size: 14px;
  text-align: center;
`;

// ─── Tela de Aguardo ─────────────────────────────────────────────
export const WaitingText = styled.Text`
  flex: 1;
  text-align: center;
  color: #d8a8ff;
  font-size: 18px;
  padding: 40px 20px;
  line-height: 30px;
`;

// ─── Resultado Final ─────────────────────────────────────────────
export const ResultCard = styled.View`
  background-color: #2c173c;
  margin: 20px;
  padding: 30px 24px;
  border-radius: 20px;
  align-items: center;
  gap: 12px;
`;

export const ResultTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const ResultScore = styled.Text`
  color: #d8a8ff;
  font-size: 18px;
  text-align: center;
`;

export const ResultXP = styled.Text`
  color: #b84ef2;
  font-size: 22px;
  font-weight: bold;
  margin-top: 8px;
  text-align: center;
`;