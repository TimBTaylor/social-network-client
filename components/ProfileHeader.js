import React from "react";
import { View, Text, Image } from "react-native";
import { ProfileHeaderStyles } from "../styles/Profile/ProfileHeader";
import { userInfoStore } from "../store/user";
import { Ionicons } from "@expo/vector-icons";

export const ProfileHeader = () => {
  return (
    <View style={ProfileHeaderStyles.container}>
      {userInfoStore.profileImage !== null ? null : (
        <Ionicons name="person-circle" size={115} color="black" />
      )}
      <Text style={ProfileHeaderStyles.name}>{userInfoStore.name}</Text>
      <Text style={ProfileHeaderStyles.email}>{userInfoStore.email}</Text>
      <View style={ProfileHeaderStyles.followContainer}>
        <View style={ProfileHeaderStyles.followingContainer}>
          <Text>
            <Text style={ProfileHeaderStyles.followingAmount}>
              {userInfoStore.followingAmount}{" "}
            </Text>
            Following
          </Text>
        </View>
        <View style={ProfileHeaderStyles.followersContainer}>
          <Text>
            <Text style={ProfileHeaderStyles.followersAmount}>
              {userInfoStore.followerAmount}{" "}
            </Text>
            Followers
          </Text>
        </View>
      </View>
    </View>
  );
};
