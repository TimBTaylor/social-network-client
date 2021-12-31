import { makeObservable } from "mobx";
import { StyleSheet } from "react-native";

export const NotificationStyles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    top: "7%",
  },
  headerContainer: {
    borderBottomColor: "#000",
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  viewedNotificationContainer: {
    height: 80,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  notViewedNotificationContainer: {
    height: 80,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0065FF",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  textAndDate: {
    marginLeft: 5,
  },
  text: {
    paddingBottom: 2,
    fontWeight: "600",
  },
  noNotifications: {
    textAlign: "center",
    marginTop: 60,
    fontWeight: "500",
  },
});
