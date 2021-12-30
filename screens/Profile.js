import React from "react";
import { View } from "react-native";
import { ProfileHeader } from "../components/ProfileHeader";
import ProfileBody from "../components/ProfileBody";
import { Footer } from "../components/Footer";
import { ProfileStyles } from "../styles/Profile/ProfileStyles";

export const Profile = ({ navigation }) => {
  return (
    <View style={ProfileStyles.container}>
      <View style={ProfileStyles.ProfileHeader}>
        <ProfileHeader />
      </View>
      <View style={ProfileStyles.ProfileBody}>
        <ProfileBody />
      </View>
      <Footer active="profile" navigation={navigation} />
    </View>
  );
};
