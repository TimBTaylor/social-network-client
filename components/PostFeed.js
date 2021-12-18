import React from "react";
import { View } from "react-native";
import { postStore } from "../store/post";
import { PostFeedStyles } from "../styles/PostFeedStyles";

import { Post } from "./Post";
import { RetweetPost } from "./RetweetPost";

export const PostFeed = () => {
  const followingPost = postStore.followingPost;

  return (
    <View style={PostFeedStyles.container}>
      {followingPost.map((post) => {
        return post.retweet ? (
          <RetweetPost key={post.postID} post={post} />
        ) : (
          <Post key={post.postID} post={post} />
        );
      })}
    </View>
  );
};
