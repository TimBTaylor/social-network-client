import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Footer from "../components/Footer";
import { NavBar } from "../components/NavBar";
import PostFeed from "../components/PostFeed";
import { HomeStyles } from "../styles/HomeStyles";
import { userInfoStore } from "../store/user";
import { Ionicons } from "@expo/vector-icons";
import { postStore } from "../store/post";
import TimsProfilePicture from "../images/outdoors.jpeg";

export const Home = ({ navigation }) => {
  return (
    <>
      <NavBar navigation={navigation} />
      <ScrollView style={HomeStyles.container}>
        <View style={HomeStyles.postContainer}>
          {userInfoStore.name === "Tim Taylor" ? (
            <Image source={TimsProfilePicture} style={HomeStyles.profilePic} />
          ) : (
            <Ionicons
              name="person-circle"
              size={55}
              color="black"
              style={HomeStyles.defaultProfileImage}
            />
          )}
          <TouchableOpacity
            style={HomeStyles.statusInput}
            onPress={() => navigation.push("Post")}
          >
            <Text style={HomeStyles.statusText}>What's on your mind?</Text>
          </TouchableOpacity>
        </View>
        <PostFeed postList={postStore.followingPost} navigation={navigation} />
      </ScrollView>
      <Footer active="home" navigation={navigation} />
    </>
  );
};
