import { StyleSheet } from "react-native";

export const PostFormHeaderStyles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "12%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 10,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    zIndex: 3,
    backgroundColor: "#fff",
  },
  createPost: {
    fontSize: 20,
    fontWeight: "500",
  },
  postButton: {
    position: "absolute",
    right: 30,
    bottom: 10,
    backgroundColor: "#003585",
    padding: 7,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
});
