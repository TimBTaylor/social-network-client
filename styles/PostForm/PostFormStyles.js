import { StyleSheet } from "react-native";

export const PostFormStyles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  formContainer: {
    position: "absolute",
    zIndex: 2,
    top: "12%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    width: "100%",
  },
  postHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgAndName: {
    flex: 1,
    flexDirection: "row",
  },
  name: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 15,
    fontSize: 20,
  },
  imgAttchContainer: {
    paddingTop: 15,
  },
  textInput: {
    width: "100%",
    height: "auto",
    padding: 10,
    paddingTop: 15,
    fontSize: 16,
  },
  profilePic: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginTop: 5,
    marginRight: 4,
  },
});
