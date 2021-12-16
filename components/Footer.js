import React from "react";
import { View, Text } from "react-native";
import { FooterStyles } from "../styles/FooterStyles";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

export const Footer = (props) => {
  const active = props.active;
  return (
    <View style={FooterStyles.container}>
      <View style={FooterStyles.home}>
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
      </View>
      <View style={FooterStyles.post}>
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
      </View>
      <View style={FooterStyles.notifications}>
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
      </View>
      <View style={FooterStyles.profile}>
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
      </View>
    </View>
  );
};
