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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  home: {
    flex: 1,
    alignItems: "center",
    color: "#fff",
  },
  post: {
    flex: 1,
    alignItems: "center",
  },
  notifications: {
    flex: 1,
    alignItems: "center",
  },
  profile: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    fontWeight: "500",
    color: "#fff",
  },
  labelActive: {
    fontWeight: "500",
    color: "#000",
  },
  postText: {
    fontWeight: "500",

    marginTop: 3,
    color: "#fff",
  },
  postTextActive: {
    fontWeight: "500",

    marginTop: 3,
    color: "#000",
  },
  iconActive: {
    color: "#000",
  },
  iconNotActive: {
    color: "#fff",
  },
});
