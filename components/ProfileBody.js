import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { postStore } from "../store/post";
import { ProfileBodyStyles } from "../styles/Profile/ProfileBodyStyles";
import { observer } from "mobx-react";
import PostFeed from "./PostFeed";

const ProfileBody = () => {
  const [currentView, setCurrentView] = useState("Post");
  return (
    <View style={ProfileBodyStyles.container}>
      <View style={ProfileBodyStyles.headerContainer}>
        <View
          style={
            currentView === "Post"
              ? ProfileBodyStyles.postContainerActive
              : ProfileBodyStyles.postContainer
          }
        >
          <TouchableOpacity onPress={() => setCurrentView("Post")}>
            <Text
              style={
                currentView === "Post"
                  ? ProfileBodyStyles.activeTab
                  : ProfileBodyStyles.tab
              }
            >
              Post
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={
            currentView === "Retweets"
              ? ProfileBodyStyles.postContainerActive
              : ProfileBodyStyles.postContainer
          }
        >
          <TouchableOpacity onPress={() => setCurrentView("Retweets")}>
            <Text
              style={
                currentView === "Retweets"
                  ? ProfileBodyStyles.activeTab
                  : ProfileBodyStyles.tab
              }
            >
              Retweets
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={
            currentView === "Likes"
              ? ProfileBodyStyles.postContainerActive
              : ProfileBodyStyles.postContainer
          }
        >
          <TouchableOpacity onPress={() => setCurrentView("Likes")}>
            <Text
              style={
                currentView === "Likes"
                  ? ProfileBodyStyles.activeTab
                  : ProfileBodyStyles.tab
              }
            >
              Likes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={ProfileBodyStyles.scrollViewContainer}>
        {currentView === "Post" ? (
          postStore.usersPost.length > 0 ? (
            <PostFeed postList={postStore.usersPost} />
          ) : (
            <Text style={ProfileBodyStyles.noPost}>No post</Text>
          )
        ) : null}
        {currentView === "Retweets" ? (
          postStore.retweetedPost.length > 0 ? (
            <PostFeed postList={postStore.retweetedPost} />
          ) : (
            <Text style={ProfileBodyStyles.noRetweets}>No retweets</Text>
          )
        ) : null}
        {currentView === "Likes" ? (
          postStore.likedPost.length > 0 ? (
            <PostFeed postList={postStore.likedPost} />
          ) : (
            <Text style={ProfileBodyStyles.noLikes}>No likes</Text>
          )
        ) : null}
      </ScrollView>
    </View>
  );
};

export default observer(ProfileBody);
