import styled from "styled-components/native";
import { StyleSheet } from "react-native";

/* BASE ORIGINAL */
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

/* STATS */
export default StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 15,
    paddingHorizontal: 10,
  },

  statCard: {
    backgroundColor: "rgba(255,255,255,0.12)",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignItems: "center",
    width: "30%",
  },

  statLabel: {
    color: "#d1b3ff",
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
    flexWrap: "wrap",
    width: "100%",
  },
});