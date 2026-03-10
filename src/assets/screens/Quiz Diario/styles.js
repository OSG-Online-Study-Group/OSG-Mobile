import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #2c173c;
  padding: 20px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackText = styled.Text`
  color: #c644e0;
  font-size: 16px;
`;

export const Title = styled.Text`
  color: #c644e0;
  font-size: 22px;
  font-weight: bold;
`;

export const SubjectBadge = styled.View`
  background-color: #8a3de3;
  border-radius: 14px;
  align-self: flex-start;
  padding: 6px 12px;
  margin-bottom: 14px;
`;

export const SubjectText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

export const QuestionCard = styled.View`
  background-color: #3f235a;
  border-radius: 18px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const QuestionText = styled.Text`
  color: #fff;
  font-size: 18px;
  line-height: 26px;
`;

export const OptionButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${(props) => props.background || "#4c2d6f"};
  border-radius: 14px;
  padding: 14px;
  margin-bottom: 10px;
`;

export const OptionText = styled.Text`
  color: #fff;
  font-size: 16px;
  line-height: 22px;
`;

export const StatusBox = styled.View`
  margin-top: 12px;
  background-color: #3f235a;
  border-radius: 14px;
  padding: 12px;
`;

export const StatusText = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const PointsText = styled.Text`
  color: #ffd166;
  font-size: 15px;
  font-weight: bold;
  margin-top: 8px;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-top: 18px;
  background-color: #8a3de3;
  border-radius: 14px;
  padding: 12px;
  align-items: center;
`;

export const ActionButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
