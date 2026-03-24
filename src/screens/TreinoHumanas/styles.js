import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2c173c;
  justify-content: center;
  padding: 20px;
`;

export const ProgressText = styled.Text`
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
`;

export const QuestionBox = styled.View`
  background-color: #3f235a;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 20px;
`;

export const QuestionText = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: center;
`;

export const OptionButton = styled.TouchableOpacity`
  padding: 14px;
  border-radius: 12px;
  margin-bottom: 10px;
`;

export const OptionText = styled.Text`
  color: #fff;
  font-size: 16px;
`;