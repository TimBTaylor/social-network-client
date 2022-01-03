import React from "react";
import { View, Text } from "react-native";
import Footer from "../components/Footer";
import PostFeed from "../components/PostFeed";
import { notificationStore } from "../store/notification";
import { ScrollView } from "react-native";
import { NotificationViewStyles } from "../styles/Notification/NotificationView";

export const NotificationView = ({ navigation }) => {
  return (
    <>
      <View style={NotificationViewStyles.headerContainer}>
        <Text style={NotificationViewStyles.header}>Post</Text>
      </View>
      <ScrollView style={NotificationViewStyles.container}>
        <PostFeed postList={notificationStore.currentNotificationView} />
      </ScrollView>
      <Footer navigation={navigation} />
    </>
  );
};
