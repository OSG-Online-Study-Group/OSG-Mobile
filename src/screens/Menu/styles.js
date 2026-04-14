import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px 10px;
`;

export const Title = styled.Text`
  color: #d36df3;
  font-size: 20px;
  font-weight: bold;
  margin-left: 165px;
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
  align-self: center;
  margin-top: 15px;
`;

export const SectionTitle = styled.Text`
  color: #c77dff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  background-color: #2a0d4d;
  padding: 8px;
  border-radius: 10px;
  margin: 20px 0 0;
`;

/* ── Badge de duelos pendentes ── */
export const BadgeWrapper = styled.TouchableOpacity`
  position: relative;
`;

export const BadgeCount = styled.View`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: #ff4d6d;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
`;

export const BadgeText = styled.Text`
  color: #fff;
  font-size: 11px;
  font-weight: bold;
`;

/* ── Card de stats ── */
export const StatsCard = styled.View`
  margin: 15px;
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
  padding-bottom: 20px;
`;

export const ProfileBanner = styled.Image`
  width: 100%;
  height: 120px;
  position: absolute;
  top: 0;
`;

export const ProfilePhoto = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  border-width: 3px;
  border-color: #fff;
  margin-top: 50px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-top: 15px;
`;

export const StatsRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 15px;
  padding: 0 10px;
`;

export const StatCard = styled.View`
  background-color: rgba(255, 255, 255, 0.12);
  padding: 15px 10px;
  border-radius: 15px;
  align-items: center;
  width: 30%;
`;

export const StatLabel = styled.Text`
  color: #d1b3ff;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const StatValue = styled.Text`
  color: #fff;
  font-size: ${(props) => (props.small ? "13px" : "18px")};
  font-weight: bold;
  text-align: center;
`;