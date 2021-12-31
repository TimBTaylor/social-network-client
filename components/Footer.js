import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FooterStyles } from "../styles/FooterStyles";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import { notificationStore } from "../store/notification";
import { observer } from "mobx-react-lite";

const Footer = (props) => {
  const active = props.active;

  const notViewedNotificationsLength =
    notificationStore.notViewedNotifications.length;

  return (
    <View style={FooterStyles.container}>
      <TouchableOpacity
        style={FooterStyles.home}
        onPress={() => props.navigation.push("Home")}
      >
        <Entypo
          name="home"
          size={45}
          style={
            active === "home"
              ? FooterStyles.iconActive
              : FooterStyles.iconNotActive
          }
        />
        <Text
          style={
            active === "home" ? FooterStyles.labelActive : FooterStyles.label
          }
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={FooterStyles.post}
        onPress={() => props.navigation.push("Post")}
      >
        <MaterialIcons
          name="post-add"
          size={45}
          style={
            active === "post"
              ? FooterStyles.iconActive
              : FooterStyles.iconNotActive
          }
        />
        <Text
          style={
            active === "post"
              ? FooterStyles.postTextActive
              : FooterStyles.postText
          }
        >
          New Post
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={FooterStyles.notifications}
        onPress={() => props.navigation.push("Notifications")}
      >
        <Ionicons
          name="notifications"
          size={45}
          style={
            active === "notifications"
              ? FooterStyles.iconActive
              : FooterStyles.iconNotActive
          }
        />
        <Text
          style={
            active === "notifications"
              ? FooterStyles.labelActive
              : FooterStyles.label
          }
        >
          Notifications
        </Text>
        {notViewedNotificationsLength > 0 ? (
          <View style={FooterStyles.notification}></View>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={FooterStyles.profile}
        onPress={() => props.navigation.push("Profile")}
      >
        <Ionicons
          name="person"
          size={45}
          style={
            active === "profile"
              ? FooterStyles.iconActive
              : FooterStyles.iconNotActive
          }
        />
        <Text
          style={
            active === "profile" ? FooterStyles.labelActive : FooterStyles.label
          }
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(Footer);
