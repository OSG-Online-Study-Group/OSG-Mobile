import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

// ─── Base ───────────────────────────────────────────
export const Container = styled.View`
  flex: 1;
  background-color: #2c173c;
`;

export const Header = styled.View`
  width: 100%;
  height: 110px;
  background-color: #3a1f54;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const LeftHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
  margin-left: 50px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 10px;
`;

export const BackText = styled.Text`
  color: #b84ef2;
  font-size: 18px;
`;

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  color: #b84ef2;
  font-size: 28px;
  font-weight: bold;
  margin: 25px 0 10px;
`;

export const SubTitle = styled.Text`
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
`;

// ─── Pódio (Ranking Pessoas) ─────────────────────────
export const TopBox = styled(LinearGradient).attrs({
  colors: ["#6A00F4", "#E040FB"],
})`
  margin: 0 20px 16px;
  border-radius: 30px;
  padding: 25px;
  align-items: center;
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
  font-size: 13px;
  text-align: center;
`;

export const PointsTop = styled.Text`
  color: white;
  font-size: 12px;
`;

export const ListCard = styled(LinearGradient).attrs({
  colors: ["#6A00F4", "#E040FB"],
})`
  flex-direction: row;
  align-items: center;
  margin: 6px 20px;
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

// ─── Cards (Ranking Grupos) ──────────────────────────
export const Card = styled.View`
  width: 85%;
  height: 80px;
  background-color: #8e2de2;
  border-radius: 40px;
  margin-bottom: 18px;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  align-self: center;
`;

export const IconCircle = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #5b2a86;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

export const CardIcon = styled.Image`
  width: 40px;
  height: 40px;
`;

export const TextContainer = styled.View`
  flex-direction: column;
`;

export const CardText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const Points = styled.Text`
  color: #220c30;
  font-size: 13px;
  font-weight: bold;
`;

export const Crown = styled.Image`
  width: 28px;
  height: 28px;
  position: absolute;
  top: -18px;
  left: 5px;
`;