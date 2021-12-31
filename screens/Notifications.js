import React from "react";
import { View } from "react-native";
import Notification from "../components/Notification";
import Footer from "../components/Footer";
import { NotificationScreenStyles } from "../styles/Notification/NotificationScreenStyles";

export const Notifications = ({ navigation }) => {
  return (
    <>
      <View style={NotificationScreenStyles.container}>
        <Notification navigation={navigation} />
      </View>
      <Footer active="notifications" navigation={navigation} />
    </>
  );
};
