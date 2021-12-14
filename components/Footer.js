import React from "react";
import { View, Text } from "react-native";
import { FooterStyles } from "../styles/FooterStyles";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

export const Footer = () => {
  return (
    <View style={FooterStyles.container}>
      <View style={FooterStyles.iconsContainer}>
        <Entypo name="home" size={45} color="#fff" />
        <MaterialIcons name="post-add" size={45} color="#fff" />
        <Ionicons name="notifications" size={45} color="#fff" />
        <Ionicons name="person" size={45} color="#fff" />
      </View>
      <View style={FooterStyles.labelContainer}>
        <Text style={FooterStyles.home}>Home</Text>
        <Text style={FooterStyles.newPost}>New Post</Text>
        <Text style={FooterStyles.notifications}>Notifications</Text>
        <Text style={FooterStyles.profile}>Profile</Text>
      </View>
    </View>
  );
};
