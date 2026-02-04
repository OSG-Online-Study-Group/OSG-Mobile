import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
  align-items: center;
`;

export const Header = styled.View`
  position: absolute;
  top: 40px;
  left: 20px;
  z-index: 2;
`;

export const BackButton = styled.TouchableOpacity`
  bottom: 207px;
  right: -10px;
`;

export const BackgroundImage = styled.Image`
  width: 100%;
  height: 221px;
`;

export const ProfileImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  margin-top: -35px;
  border: 3px solid #a13df5;
  margin-left: 10px;
`;

export const Name = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Username = styled.Text`
  color: #a086cc;
  font-size: 14px;
  margin-left: 10px;
`;

export const PointsCard = styled.View`
  background-color: #611b9f;
  border-radius: 15px;
  padding: 10px 20px;
  margin-top: 15px;
`;

export const PointsText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

export const Stat = styled.View`
  align-items: center;
`;

export const StatNumber = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-left: -5px;
`;

export const StatLabel = styled.Text`
  color: #a086cc;
  font-size: 15px;
  margin-left: -5px;
`;

export const SectionTitle = styled.Text`
  color: #b060f0;
  font-weight: bold;
  font-size: 20px;
  margin-top: 25px;
  align-self: flex-start;
  margin-left: 13px;
`;

export const BadgesContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 15px 0;
`;

export const Badge = styled.Image`
  width: 60px;
  height: 60px;
  margin: 10px;
`;

export const PlusCard = styled.View`
  background-color: #54268a;
  border-radius: 15px;
  padding: 15px;
  margin: 10px 20px;
`;

export const PlusText = styled.Text`
  color: #d1b9ff;
  font-size: 14px;
  text-align: center;
`;

export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px 25px;
  margin-left: -5px;
`;

export const MenuText = styled.Text`
  color: white;
  font-size: 15px;
  margin-left: 10px;
`;

export const Divider = styled.View`
  height: 5px;
  width: 100%;
  background-color: #3b0f66;
  margin: 10px 0;
`;
