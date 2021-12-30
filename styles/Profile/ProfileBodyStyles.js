import { StyleSheet } from "react-native";

export const ProfileBodyStyles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingLeft: 10,
    paddingRight: 10,
  },
  postContainerActive: {
    borderBottomColor: "#003585",
    borderBottomWidth: 2,
    flex: 1,
    alignItems: "center",
    paddingBottom: 10,
  },
  postContainer: {
    borderBottomColor: "#B7B7B7",
    borderBottomWidth: 2,
    flex: 1,
    alignItems: "center",
    paddingBottom: 10,
  },
  tab: {
    fontSize: 20,
    color: "#000",
  },
  activeTab: {
    fontSize: 20,
    fontWeight: "600",
    color: "#003585",
  },
  noPost: {
    textAlign: "center",
    paddingTop: 10,
  },
  noRetweets: {
    textAlign: "center",
    paddingTop: 10,
  },
  noLikes: {
    textAlign: "center",
    paddingTop: 10,
  },
});
