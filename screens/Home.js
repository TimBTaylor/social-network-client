import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { PostFeed } from "../components/PostFeed";
import { HomeStyles } from "../styles/HomeStyles";
import { userInfoStore } from "../store/user";
import { Ionicons } from "@expo/vector-icons";

export const Home = () => {
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
        <PostFeed />
      </ScrollView>
      <Footer active="home" />
    </>
  );
};
