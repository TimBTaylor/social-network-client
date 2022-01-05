import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    top: "10%",
    height: "100%",
    width: "100%",
  },
  postContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "red",
  },
  statusInput: {
    borderWidth: 1,
    borderColor: "#000",
    width: 300,
    height: 50,
    borderRadius: 5,
  },
  statusText: {
    paddingLeft: 5,
    paddingTop: 5,
  },
  profilePic: {
    height: 38,
    width: 38,
    borderRadius: 50,
    marginRight: 5,
  },
});
