import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px 10px 20px;
`;

export const Title = styled.Text`
  color: #d36df3;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;

export const SearchContainer = styled.View`
  width: 85%;
  align-self: center;
  flex-direction: row;
  align-items: center;
  background-color: #2a0d4d;
  border-radius: 20px;
  padding: 6px 12px;
  margin-top: 10px;
`;

export const SearchInput = styled.TextInput`
  color: #fff;
  margin-left: 8px;
  flex: 1;
  font-size: 12px;
`;

export const Banner = styled.Image`
  width: 85%;
  height: 200px;
  border-radius: 20px;
`;

export const SectionTitle = styled.Text`
  color: #c77dff;
  font-size: 14px;
  font-weight: bold;
  margin: 20px;
  text-align: center;
  background-color: #2a0d4d;
  padding: 8px;
  border-radius: 10px;
  width: 100%;
  margin-left: 0;
`;

export const InfoCard = styled(LinearGradient)`
  width: 90%;
  height: 340px;
  align-self: center;
  border-radius: 20px;
  padding: 15px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 160px;
  border-radius: 15px;
`;

export const ProfileRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: -30px;
`;

export const ProfileImage = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 35px;
  border-width: 3px;
  border-color: #fff;
`;

export const ProfileInfo = styled.View`
  margin-left: 10px;
`;

export const Name = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Username = styled.Text`
  color: #ddd;
`;

export const StatsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const StatBox = styled.View`
  background-color: rgba(0, 0, 0, 0.25);
  padding: 10px;
  border-radius: 15px;
  align-items: center;
  width: 30%;
`;

export const StatLabel = styled.Text`
  color: #fff;
  font-size: 10px;
  text-align: center;
`;

export const StatValue = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-top: 5px;
`;