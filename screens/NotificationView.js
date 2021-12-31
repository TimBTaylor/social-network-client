import React from "react";
import Footer from "../components/Footer";
import PostFeed from "../components/PostFeed";
import { notificationStore } from "../store/notification";
import { ScrollView } from "react-native";

export const NotificationView = ({ navigation }) => {
  return (
    <>
      <ScrollView
        style={{
          position: "absolute",
          zIndex: 1,
          top: "10%",
          height: "100%",
          width: "100%",
        }}
      >
        <PostFeed postList={notificationStore.currentNotificationView} />
      </ScrollView>
      <Footer navigation={navigation} />
    </>
  );
};
