import { StyleSheet } from "react-native";

export const NotificationViewStyles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "10%",
    zIndex: 1,
    height: "100%",
    width: "100%",
  },
  headerContainer: {
    height: "10%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  header: {
    fontSize: 20,
    fontWeight: "600",
  },
});
