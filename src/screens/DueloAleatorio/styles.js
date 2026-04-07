import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1033",
    paddingHorizontal: 20,
  },

  topSpace: {
    flex: 1,
  },

  bottomSpace: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  badgeMateria: {
    backgroundColor: "#7c3aed",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
  },

  badgeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },

  timer: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  content: {
    flex: 2,
    justifyContent: "center",
  },

  pergunta: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 25,
    textAlign: "center",
  },

  alt: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 6,
  },

  altText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },

  containerCenter: {
    flex: 1,
    backgroundColor: "#1a1033",
    justifyContent: "center",
    alignItems: "center",
  },

  loading: {
    flex: 1,
    backgroundColor: "#1a1033",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },

  score: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
  },

  text: {
    color: "#ccc",
    marginTop: 10,
  },
});