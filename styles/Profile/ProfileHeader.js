import { StyleSheet } from "react-native";

export const ProfileHeaderStyles = StyleSheet.create({
  container: {
    marginTop: "20%",
    flex: 1,
    alignItems: "center",
  },
  name: {
    fontSize: 28,
    fontWeight: "500",
  },
  email: {
    fontSize: 16,
    fontWeight: "300",
  },
  followContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  followingContainer: {
    marginRight: 10,
  },
  followersContainer: {
    marginLeft: 10,
  },
  followingAmount: {
    fontWeight: "600",
  },
  followersAmount: {
    fontWeight: "600",
  },
  isFollowingVisitor: {
    backgroundColor: "#BFBFBF",
    padding: 3,
    borderRadius: 15,
  },
  unfollow: {
    position: "absolute",
    bottom: 5,
    right: 0,
    zIndex: 2,
    backgroundColor: "#003585",
    padding: 7,
    borderRadius: 15,
  },
  unfollowText: {
    color: "#fff",
    fontWeight: "500",
  },
  follow: {
    position: "absolute",
    bottom: 5,
    right: 0,
    zIndex: 2,
    backgroundColor: "#fff",
    borderColor: "#003585",
    borderWidth: 2,
    padding: 7,
    borderRadius: 15,
  },
  followText: {
    fontWeight: "500",
    color: "#003585",
  },
});
