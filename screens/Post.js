import React from "react";
import { View } from "react-native";
import Footer from "../components/Footer";
import { PostForm } from "../components/PostForm";
import { PostScreenStyles } from "../styles/PostScreenStyles";

export const Post = ({ navigation }) => {
  return (
    <View style={PostScreenStyles.container}>
      <PostForm navigation={navigation} />
      <Footer active="post" navigation={navigation} />
    </View>
  );
};
