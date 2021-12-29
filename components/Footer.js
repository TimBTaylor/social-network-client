import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FooterStyles } from "../styles/FooterStyles";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import { userInfoStore } from "../store/user";

export const Footer = (props) => {
  const active = props.active;
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
