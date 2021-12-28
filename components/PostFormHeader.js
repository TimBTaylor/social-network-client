import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PostFormHeaderStyles } from "../styles/PostForm/PostFormHeader";
import { userInfoStore } from "../store/user";
import { postStore } from "../store/post";
import { Alert } from "react-native";

export const PostFormHeader = (props) => {
  const statusInput = props.statusInput;
  const statusImage = props.statusImage;
  const date = new Date();
  const handlePost = () => {
    if (statusInput.length > 1 || statusImage !== null) {
      const data = {
        postedByID: userInfoStore.id,
        text: statusInput,
        date,
        userName: userInfoStore.name,
        userImage: userInfoStore.profileImage,
        postImage: statusImage,
      };
      postStore.createNewPost(data, props.navigation);
    } else {
      Alert.alert("Invalid Input", "Your status must be atleast 2 characters", [
        { text: "OK" },
      ]);
    }
  };
  return (
    <View style={PostFormHeaderStyles.container}>
      <Text style={PostFormHeaderStyles.createPost}>Create Post</Text>
      <TouchableOpacity
        style={PostFormHeaderStyles.postButton}
        onPress={handlePost}
      >
        <Text style={PostFormHeaderStyles.buttonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};
