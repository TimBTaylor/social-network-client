import React from "react";
import { View, Text } from "react-native";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { postStore } from "../store/post";

export const Home = () => {
  const followingPost = postStore.followingPost;
  return (
    <>
      <NavBar />
      <View></View>
      <Footer active="home" />
    </>
  );
};
