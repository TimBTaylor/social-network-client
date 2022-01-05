import { StyleSheet } from "react-native";

export const PostStyles = StyleSheet.create({
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
    paddingLeft: 15,
  },
  likesAmountContainer: {
    position: "absolute",
    left: 30,
    backgroundColor: "#003585",
    height: 20,
    width: 20,
    borderRadius: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  likesAmount: {
    color: "#fff",
  },
  retweet: {
    marginLeft: 50,
  },
  retweetsAmountContainer: {
    position: "absolute",
    left: 35,
    backgroundColor: "#003585",
    height: 20,
    width: 20,
    borderRadius: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  retweetsAmount: {
    color: "#fff",
    fontSize: 12,
  },
  profilePic: {
    height: 38,
    width: 38,
    borderRadius: 50,
    marginTop: 5,
    marginRight: 4,
  },
});
