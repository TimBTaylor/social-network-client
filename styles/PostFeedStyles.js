import { StyleSheet } from "react-native";

export const PostFeedStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
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
  postText: {
    paddingLeft: 5,
    paddingBottom: 10,
  },
  likeAndRetweet: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 7,
    paddingBottom: 10,
    paddingLeft: 5,
  },
});
