import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ProfileHeaderStyles } from "../styles/Profile/ProfileHeader";
import { Ionicons } from "@expo/vector-icons";
import { userInfoStore } from "../store/user";
import { followingStore } from "../store/following";
import { observer } from "mobx-react";

const ProfileHeader = (props) => {
  const userInfo = props.userInfo;
  let isFollowingVisitor;
  let visitorIsFollowing;
  let ownProfile = userInfo.name === userInfoStore.name;

  //checks if the profile is following the visitor
  if (userInfo.isFollowingVisitor === 1) {
    isFollowingVisitor = true;
  } else {
    isFollowingVisitor = false;
  }

  //checks if visitor is following the profile
  if (userInfo.visitorIsFollowing === 1) {
    visitorIsFollowing = true;
  } else {
    visitorIsFollowing = false;
  }

  const handleFollow = () => {
    followingStore.followUser(userInfoStore.id, userInfo.id, props.navigation);
  };

  const handleUnfollow = () => {
    followingStore.unfollowUser(
      userInfoStore.id,
      userInfo.id,
      props.navigation
    );
  };

  return (
    <View style={ProfileHeaderStyles.container}>
      {userInfo.profileImage !== null ? null : (
        <View style={ProfileHeaderStyles.imageContainer}>
          <Ionicons name="person-circle" size={115} color="black" />
          {ownProfile ? null : visitorIsFollowing ? (
            <TouchableOpacity
              style={ProfileHeaderStyles.unfollow}
              onPress={() => handleUnfollow()}
            >
              <Text style={ProfileHeaderStyles.unfollowText}>Following</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={ProfileHeaderStyles.follow}
              onPress={() => handleFollow()}
            >
              <Text style={ProfileHeaderStyles.followText}>Follow</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      <Text style={ProfileHeaderStyles.name}>{userInfo.name}</Text>
      {userInfo.email !== undefined ? (
        <Text style={ProfileHeaderStyles.email}>{userInfo.email}</Text>
      ) : null}
      {ownProfile ? null : isFollowingVisitor ? (
        <View style={ProfileHeaderStyles.isFollowingVisitor}>
          <Text>Follows you</Text>
        </View>
      ) : null}
      <View style={ProfileHeaderStyles.followContainer}>
        <View style={ProfileHeaderStyles.followingContainer}>
          <Text>
            <Text style={ProfileHeaderStyles.followingAmount}>
              {userInfo.followingAmount}{" "}
            </Text>
            Following
          </Text>
        </View>
        <View style={ProfileHeaderStyles.followersContainer}>
          <Text>
            <Text style={ProfileHeaderStyles.followersAmount}>
              {userInfo.followerAmount}{" "}
            </Text>
            Followers
          </Text>
        </View>
      </View>
    </View>
  );
};

export default observer(ProfileHeader);
