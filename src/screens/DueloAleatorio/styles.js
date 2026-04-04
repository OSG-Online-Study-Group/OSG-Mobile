import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#140a24",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    color: "#c084fc",
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },

  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  scoreBox: {
    alignItems: "center",
    backgroundColor: "#2a1747",
    padding: 15,
    borderRadius: 12,
    width: 110,
  },

  scoreLabel: {
    color: "#c4b5fd",
    fontSize: 14,
    marginBottom: 5,
  },

  score: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },

  vs: {
    color: "#a78bfa",
    fontSize: 18,
    fontWeight: "bold",
  },

  perguntaBox: {
    backgroundColor: "#2e1a47",
    padding: 25,
    borderRadius: 16,
    marginBottom: 30,
  },

  pergunta: {
    color: "#f5f3ff",
    fontSize: 18,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#7c3aed",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: "#140a24",
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    color: "#c084fc",
    marginTop: 10,
  },
});