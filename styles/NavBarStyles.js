import { StyleSheet } from "react-native";

export const NavBarStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: "5%",
    width: "100%",
  },
  brandAndSearch: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  brand: {
    fontSize: 24,
    fontWeight: "500",
  },
  searchContainer: {
    justifyContent: "center",
    backgroundColor: "#003585",
    height: 36,
    width: 36,
    borderRadius: 50,
  },
  postContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "red",
  },
  defaultProfileImage: {},
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
});