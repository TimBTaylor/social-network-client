import React from "react";
import { View } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import ProfileBody from "../components/ProfileBody";
import Footer from "../components/Footer";
import { ProfileStyles } from "../styles/Profile/ProfileStyles";
import { userInfoStore } from "../store/user";
import { postStore } from "../store/post";

export const Profile = ({ navigation }) => {
  return (
    <View style={ProfileStyles.container}>
      <View style={ProfileStyles.ProfileHeader}>
        <ProfileHeader userInfo={userInfoStore} />
      </View>
      <View style={ProfileStyles.ProfileBody}>
        <ProfileBody postInfo={postStore} navigation={navigation} />
      </View>
      <Footer active="profile" navigation={navigation} />
    </View>
  );
};
