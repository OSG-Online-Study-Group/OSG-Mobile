import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B0B3A",
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  // Top bar
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3A194D",
    paddingHorizontal: 12,
    borderRadius: 20,
    width: "55%",
    height: 38,
  },
  searchInput: {
    color: "#fff",
    marginLeft: 6,
  },
  profileIcon: {
    backgroundColor: "#3A194D",
    padding: 8,
    borderRadius: 50,
  },

  image: {
    width: "100%",
    height: 250,
    marginTop: 10,
  },


  title: {
    color: "#FFF",
    fontSize: 36,
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Roboto",
  },

  groupBox: {
    backgroundColor: "#3A194D",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 120,
    marginRight: 120
  },
  groupText: {
    color: "#E2D2FF",
    fontSize: 18,
  },
  groupName: {
    color: "#9B4DFF",
    fontSize: 24,
    marginTop: 4,
  },

  searchGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  searchGroupInput: {
    flex: 1,
    backgroundColor: "#3A194D",
    padding: 14,
    borderRadius: 15,
    color: "#fff",
  },
  searchButton: {
    backgroundColor: "#9D72FF",
    padding: 12,
    borderRadius: 40,
    marginLeft: 10,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3A194D",
    paddingVertical: 10,
    borderRadius: 20,
    position: "absolute",
    bottom: 20,
    width: "90%",
    alignSelf: "center",
    paddingHorizontal: 18,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#CFA7FF",
    fontSize: 11,
    marginTop: 3,
  },
  navItemActive: {
    backgroundColor: "#A95BFF",
    padding: 15,
    borderRadius: 25,
    marginTop: -25,
  },
});
