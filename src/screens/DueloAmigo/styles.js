import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1a1033;
  padding-top: 40px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 16px;
`;

export const Title = styled.Text`
  color: #B84EF2;
  font-size: 20px;
  font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackText = styled.Text`
  color: #C67AFC;
  font-size: 16px;
`;

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

export const ProgressText = styled.Text`
  text-align: center;
  color: #A086CC;
  font-size: 14px;
  margin-bottom: 12px;
`;

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

export const OptionButton = styled.TouchableOpacity`
  background-color: ${(props) => props.background || "#4c2d6f"};
  margin: 6px 20px;
  padding: 14px;
  border-radius: 12px;
  align-items: center;
`;

export const OptionText = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const StatusBox = styled.View`
  margin: 12px 20px;
  align-items: center;
`;

export const StatusText = styled.Text`
  color: #A086CC;
  font-size: 14px;
  text-align: center;
`;

export const ResultCard = styled.View`
  background-color: #2c173c;
  margin: 20px;
  padding: 30px;
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
`;

export const ResultXP = styled.Text`
  color: #B84EF2;
  font-size: 22px;
  font-weight: bold;
  margin-top: 8px;
`;

export const WaitingText = styled.Text`
  flex: 1;
  text-align: center;
  color: #d8a8ff;
  font-size: 18px;
  padding: 40px 20px;
  line-height: 30px;
`;