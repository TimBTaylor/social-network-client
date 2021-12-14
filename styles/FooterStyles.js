import { StyleSheet } from "react-native";

export const FooterStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 120,
    backgroundColor: "#003585",
  },
  iconsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  labelContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  home: {
    fontSize: 15,
    fontWeight: "400",
    color: "#fff",
  },
  newPost: {
    fontSize: 15,
    fontWeight: "400",
    color: "#fff",
  },
  notifications: {
    fontSize: 15,
    fontWeight: "400",
    color: "#fff",
  },
  profile: {
    fontSize: 15,
    fontWeight: "400",
    color: "#fff",
  },
});
