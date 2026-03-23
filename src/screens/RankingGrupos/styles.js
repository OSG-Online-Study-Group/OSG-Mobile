import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  background-color: #2b0d3f;
`;

export const Header = styled.View`
  width: 100%;
  height: 120px;
  background-color: #3b1c52;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
`;

export const LeftHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 140px;
  height: 140px;
  margin-left: 40px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackText = styled.Text`
  color: #d44cff;
  font-size: 18px;
`;

export const TopBox = styled(LinearGradient).attrs({
  colors: ["#6A00F4", "#E040FB"]
})`
  margin: 20px;
  border-radius: 30px;
  padding: 25px;
  align-items: center;
`;

export const Title = styled.Text`
  color: white;
  font-size: 16px;
`;

export const SubTitle = styled.Text`
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const TopUsers = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TopUser = styled.View`
  align-items: center;
  width: 33%;
`;

export const Crown = styled.Image`
  width: 45px;
  height: 45px;
  position: absolute;
  top: -35px;
`;

export const AvatarTop = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-width: 4px;
  border-color: white;
`;

export const UsernameTop = styled.Text`
  color: white;
  margin-top: 5px;
  font-weight: bold;
`;

export const PointsTop = styled.Text`
  color: white;
  font-size: 12px;
`;

export const ListCard = styled(LinearGradient).attrs({
  colors: ["#6A00F4", "#E040FB"]
})`
  flex-direction: row;
  align-items: center;

  margin: 10px 20px;

  padding: 14px;

  border-radius: 40px;
`;

export const Avatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 22px;
  margin-right: 15px;
`;

export const Username = styled.Text`
  color: white;
  font-size: 18px;
  flex: 1;
`;

export const Points = styled.Text`
  color: #2b0d3f;
  font-weight: bold;
`;