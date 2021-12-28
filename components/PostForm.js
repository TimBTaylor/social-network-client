import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { PostFormHeader } from "./PostFormHeader";
import { PostFormStyles } from "../styles/PostForm/PostFormStyles";
import { userInfoStore } from "../store/user";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const PostForm = (props) => {
  const [statusInput, setStatusInput] = useState("");
  const [statusImage, setStatusImage] = useState(null);

  return (
    <View style={PostFormStyles.container}>
      <PostFormHeader
        statusInput={statusInput}
        statusImage={statusImage}
        navigation={props.navigation}
      />
      <View style={PostFormStyles.formContainer}>
        <View style={PostFormStyles.postHeader}>
          <View style={PostFormStyles.imgAndName}>
            {userInfoStore.profileImage !== null ? (
              <Image source={post.postedByImage} />
            ) : (
              <Ionicons name="person-circle" size={55} color="black" />
            )}
            <Text style={PostFormStyles.name}>{userInfoStore.name}</Text>
          </View>
          <View style={PostFormStyles.imgAttchContainer}>
            <Entypo name="image" size={40} color="black" />
          </View>
        </View>
        <TextInput
          style={PostFormStyles.textInput}
          placeholder="What's on your mind?"
          value={statusInput}
          onChangeText={(e) => setStatusInput(e)}
          multiline={true}
        />
      </View>
    </View>
  );
};
