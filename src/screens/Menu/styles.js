import styled from "styled-components/native";
import { StyleSheet } from "react-native";

// 🔝 BASE ORIGINAL (NÃO ALTERADO)
export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
  align-items: center;
  justify-content: flex-start;
  padding-top: 40px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Title = styled.Text`
  color: #d36df3;
  font-size: 24px;
  font-weight: bold;
`;

export const MenuIcon = styled.Image`
  width: 30px;
  height: 24px;
`;

export const ProfileIcon = styled.Image`
  width: 35px;
  height: 35px;
`;

export const SearchBar = styled.TextInput`
  width: 85%;
  height: 40px;
  margin: 20px 0;
  background-color: #2a0d4d;
  border-radius: 20px;
  padding: 0 15px;
  color: white;
`;

export const Banner = styled.Image`
  width: 90%;
  height: 210px;
  border-radius: 15px;
  margin-bottom: 25px;
`;

export const SectionTitle = styled.Text`
  color: #b060f0;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

// 🔥 ESTATÍSTICAS (NOVO)
export default StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 10,
  },

  statCard: {
    backgroundColor: "#3b0f66",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignItems: "center",
    width: "30%",
  },

  statLabel: {
    color: "#b060f0",
    fontSize: 12,
    marginBottom: 5,
  },

  statValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  statValueSmall: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
});