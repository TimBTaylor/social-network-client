import { StyleSheet } from "react-native";

export const LandingStyles = StyleSheet.create({
  colorContainer: {
    position: "relative",
    textAlign: "center",
  },
  blueContainer: {
    backgroundColor: "#003585",
    height: "100%",
  },
  image: {
    height: 300,
    width: 300,
    position: "absolute",
    zIndex: 2,
    transform: [{ translateY: 50 }, { translateX: 45 }],
    opacity: 0.3,
  },
  socialNetwork: {
    marginTop: 175,
    position: "absolute",
    zIndex: 3,
    fontSize: 36,
    color: "#FFF",
    width: "100%",
    textAlign: "center",
  },
  alwaysConnected: {
    marginTop: 215,
    position: "absolute",
    zIndex: 3,
    fontSize: 16,
    color: "#FFF",
    width: "100%",
    textAlign: "center",
  },
});
