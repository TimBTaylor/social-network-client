import React from "react";
import ProfileBody from "../components/ProfileBody";
import ProfileHeader from "../components/ProfileHeader";
import Footer from "../components/Footer";
import { UsersProfileStyles } from "../styles/UsersProfile/UsersProfile";
import { userInfoStore } from "../store/user";
import { View, Text } from "react-native";

export const UsersProfile = ({ navigation }) => {
  return (
    <>
      <View style={UsersProfileStyles.container}>
        <View style={UsersProfileStyles.ProfileHeader}>
          <ProfileHeader
            userInfo={userInfoStore.currentUserProfile}
            navigation={navigation}
          />
        </View>
        <View style={UsersProfileStyles.ProfileBody}>
          <ProfileBody
            postInfo={userInfoStore.currentUserProfile}
            navigation={navigation}
          />
        </View>
        <Footer active="home" navigation={navigation} />
      </View>
    </>
  );
};
