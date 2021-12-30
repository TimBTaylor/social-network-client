import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import PostFeed from "../components/PostFeed";
import { HomeStyles } from "../styles/HomeStyles";
import { userInfoStore } from "../store/user";
import { Ionicons } from "@expo/vector-icons";
import { postStore } from "../store/post";

export const Home = ({ navigation }) => {
  return (
    <>
      <NavBar />
      <ScrollView style={HomeStyles.container}>
        <View style={HomeStyles.postContainer}>
          {userInfoStore.profileImage ? (
            <Image
              source={{ uri: userInfoStore.profileImage }}
              style={HomeStyles.profileImage}
            />
          ) : (
            <Ionicons
              name="person-circle"
              size={55}
              color="black"
              style={HomeStyles.defaultProfileImage}
            />
          )}
          <TouchableOpacity style={HomeStyles.statusInput}>
            <Text style={HomeStyles.statusText}>What's on your mind?</Text>
          </TouchableOpacity>
        </View>
        <PostFeed postList={postStore.followingPost} />
      </ScrollView>
      <Footer active="home" navigation={navigation} />
    </>
  );
};
