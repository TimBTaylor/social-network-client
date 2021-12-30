import { observer } from "mobx-react";
import React from "react";
import { View } from "react-native";
import { PostFeedStyles } from "../styles/PostFeedStyles";

import Post from "./Post";
import RetweetPost from "./RetweetPost";

const PostFeed = (props) => {
  const postList = props.postList;
  return (
    <View style={PostFeedStyles.container}>
      {postList.map((post) => {
        return post.retweet ? (
          <RetweetPost key={post.postID} post={post} />
        ) : (
          <Post key={post.postID} post={post} />
        );
      })}
    </View>
  );
};

export default observer(PostFeed);
