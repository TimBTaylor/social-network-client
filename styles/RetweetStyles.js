import { StyleSheet } from "react-native";

export const RetweetStyles = StyleSheet.create({
  postContainer: {
    height: "auto",
    backgroundColor: "#E5E5E5",
    marginBottom: 10,
    borderRadius: 5,
  },
  postHeader: {
    paddingLeft: 5,
    paddingBottom: 5,
    flex: 1,
    flexDirection: "row",
  },
  nameAndDate: {
    flex: 1,
    justifyContent: "center",
  },
  postedByName: {
    fontWeight: "600",
  },
  retweetBody: {
    borderWidth: StyleSheet.hairlineWidth,
    width: "90%",
    alignSelf: "center",
    padding: 5,
  },
  retweetHeader: {
    paddingLeft: 5,
    paddingBottom: 5,
    flex: 1,
    flexDirection: "row",
  },
  postText: {
    paddingLeft: 5,
    paddingBottom: 10,
  },
  likeAndRetweet: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 7,
    paddingBottom: 10,
    paddingLeft: 10,
  },
});
