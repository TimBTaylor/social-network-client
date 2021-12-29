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
});
