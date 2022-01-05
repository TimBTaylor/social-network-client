import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { RetweetStyles } from "../styles/RetweetStyles";
import { Ionicons } from "@expo/vector-icons";
import { HomeStyles } from "../styles/HomeStyles";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { postStore } from "../store/post";
import { userInfoStore } from "../store/user";
import { observer } from "mobx-react";
import { notificationStore } from "../store/notification";
import TimsProfilePicture from "../images/outdoors.jpeg";
import BobsProfilePicture from "../images/randomguy.jpeg";

const RetweetPost = (props) => {
  const post = props.post;
  //returns time from date of post
  function getTimeDiff(oDatePublished) {
    var oResult = {};

    var oToday = new Date();

    var nDiff = oToday.getTime() - oDatePublished.getTime();

    // Get diff in days
    oResult.days = Math.floor(nDiff / 1000 / 60 / 60 / 24);
    nDiff -= oResult.days * 1000 * 60 * 60 * 24;

    // Get diff in hours
    oResult.hours = Math.floor(nDiff / 1000 / 60 / 60);
    nDiff -= oResult.hours * 1000 * 60 * 60;

    // Get diff in minutes
    oResult.minutes = Math.floor(nDiff / 1000 / 60);
    nDiff -= oResult.minutes * 1000 * 60;

    // Get diff in seconds
    oResult.seconds = Math.floor(nDiff / 1000);

    // Render the diffs into friendly duration string

    // Days
    var sDays = "00";
    if (oResult.days > 0) {
      sDays = String(oResult.days);
    }
    if (sDays.length === 1) {
      sDays = "0" + sDays;
    }

    // Format Hours
    var sHour = "00";
    if (oResult.hours > 0) {
      sHour = String(oResult.hours);
    }
    if (sHour.length === 1) {
      sHour = "0" + sHour;
    }

    //  Format Minutes
    var sMins = "00";
    if (oResult.minutes > 0) {
      sMins = String(oResult.minutes);
    }
    if (sMins.length === 1) {
      sMins = "0" + sMins;
    }

    //  Format Seconds
    var sSecs = "00";
    if (oResult.seconds > 0) {
      sSecs = String(oResult.seconds);
    }
    if (sSecs.length === 1) {
      sSecs = "0" + sSecs;
    }

    //  Set Duration
    var sDuration = sDays + ":" + sHour + ":" + sMins + ":" + sSecs;
    oResult.duration = sDuration;

    // Set friendly text for printing
    if (oResult.days === 0) {
      if (oResult.hours === 0) {
        if (oResult.minutes === 0) {
          var sSecHolder = oResult.seconds > 1 ? "Seconds" : "Second";
          oResult.friendlyNiceText =
            oResult.seconds + " " + sSecHolder + " ago";
        } else {
          var sMinutesHolder = oResult.minutes > 1 ? "Minutes" : "Minute";
          oResult.friendlyNiceText =
            oResult.minutes + " " + sMinutesHolder + " ago";
        }
      } else {
        var sHourHolder = oResult.hours > 1 ? "Hours" : "Hour";
        oResult.friendlyNiceText = oResult.hours + " " + sHourHolder + " ago";
      }
    } else {
      var sDayHolder = oResult.days > 1 ? "Days" : "Day";
      oResult.friendlyNiceText = oResult.days + " " + sDayHolder + " ago";
    }
    return oResult;
  }

  //creates time from post element
  function postTimeDisplay(postDate) {
    const timeDiff = getTimeDiff(new Date(`${postDate}`));
    if (timeDiff.days > 0) {
      return <Text style={RetweetStyles.timeDifference}>{timeDiff.days}d</Text>;
    } else if (timeDiff.hours >= 1) {
      return (
        <Text style={RetweetStyles.timeDifference}>{timeDiff.hours}h</Text>
      );
    } else if (timeDiff.minutes >= 1) {
      return (
        <Text style={RetweetStyles.timeDifference}>{timeDiff.minutes}min</Text>
      );
    } else {
      return (
        <Text style={RetweetStyles.timeDifference}>{timeDiff.seconds}s</Text>
      );
    }
  }

  const isLikedPost = postStore.likedPost.some((object) => {
    if (object.postID === post.postID) {
      return true;
    }
  });

  const isRetweetedPost = postStore.retweetedPost.some((object) => {
    if (object.originalPostID === post.postID) {
      return true;
    }
  });

  const handleLikedPost = () => {
    const data = {
      likesAmount: post.likes + 1,
      postID: post.postID,
      postedByID: post.postedByID,
      likedByID: userInfoStore.id,
    };
    postStore.likePost(data);
    const newNoticationData = {
      userForID: post.postedByID,
      userFromID: userInfoStore.id,
      userFromImage: userInfoStore.profileImage,
      text: `${userInfoStore.name} liked your post`,
      viewed: 0,
      postID: post.postID,
      retweet: 1,
    };
    notificationStore.createNewNotification(newNoticationData);
  };

  const handleRemoveLiked = () => {
    const data = {
      likesAmount: post.likes - 1,
      postID: post.postID,
      postedByID: post.postedByID,
      likedByID: userInfoStore.id,
    };
    postStore.removeLikeFromPost(data);
  };
  const handleRetweetPost = () => {
    const data = {
      retweetsAmount: post.retweets + 1,
      postedByID: userInfoStore.id,
      text: post.text,
      date: new Date(),
      userName: userInfoStore.name,
      userImage: userInfoStore.profileImage,
      postImage: post.postImage,
      retweet: 1,
      originalPostedByID: post.originalPostedByID,
      originalPostedByName: post.originalPostedByName,
      originalPostedByImage: post.originalPostedByImage,
      originalPostedByDate: post.originalPostedByDate,
      originalPostID: post.originalPostID,
    };
    postStore.retweetPost(data);
    const newNoticationData = {
      userForID: post.postedByID,
      userFromID: userInfoStore.id,
      userFromImage: userInfoStore.profileImage,
      text: `${userInfoStore.name} retweeted your post`,
      viewed: 0,
      postID: post.postID,
      retweet: 1,
    };
    notificationStore.createNewNotification(newNoticationData);
  };

  const handleRemoveRetweet = () => {
    const currentPostID = post.postID;
    const toBeRemovedPost = postStore.usersPost.filter((post) => {
      return post.originalPostID === currentPostID;
    });
    const data = {
      retweetsAmount: post.retweets - 1,
      retweetedPostID: post.postID,
      postedByID: userInfoStore.id,
      postID: toBeRemovedPost[0].id,
    };
    postStore.removeRetweetFromPost(data);
  };

  const handleVisitProfile = (userID) => {
    userInfoStore.getCurrentUserProfile(userID, props.navigation);
  };

  return (
    <View key={post.postID} style={RetweetStyles.postContainer}>
      <TouchableOpacity
        style={RetweetStyles.postHeader}
        onPress={() => handleVisitProfile(post.postedByID)}
      >
        {post.postedByName === "Tim Taylor" ? (
          <Image source={TimsProfilePicture} style={RetweetStyles.profilePic} />
        ) : (
          <Ionicons
            name="person-circle"
            size={45}
            color="black"
            style={HomeStyles.defaultProfileImage}
          />
        )}
        <View style={RetweetStyles.nameAndDate}>
          <Text style={RetweetStyles.postedByName}>{post.postedByName}</Text>
          {postTimeDisplay(post.date)}
        </View>
      </TouchableOpacity>
      <View style={RetweetStyles.postBody}>
        <View style={RetweetStyles.retweetBody}>
          <TouchableOpacity
            style={RetweetStyles.retweetHeader}
            onPress={() => handleVisitProfile(post.originalPostedByID)}
          >
            {post.originalPostedByName === "Bob Evans" ? (
              <Image
                source={BobsProfilePicture}
                style={RetweetStyles.profilePic}
              />
            ) : (
              <Ionicons
                name="person-circle"
                size={45}
                color="black"
                style={HomeStyles.defaultProfileImage}
              />
            )}
            <View style={RetweetStyles.nameAndDate}>
              <Text style={RetweetStyles.postedByName}>
                {post.originalPostedByName}
              </Text>
              {postTimeDisplay(post.originalPostedByDate)}
            </View>
          </TouchableOpacity>
          <Text style={RetweetStyles.postText}>{post.text}</Text>
          {post.postImage !== null ? null : null}
        </View>
        <View
          style={{
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
            width: "95%",
            alignSelf: "center",
            paddingTop: 10,
          }}
        ></View>
        <View style={RetweetStyles.likeAndRetweet}>
          {isLikedPost ? (
            <TouchableOpacity
              style={RetweetStyles.like}
              onPress={handleRemoveLiked}
            >
              <AntDesign name="like1" size={30} color="#003585" />
              {post.likes > 0 ? (
                <View style={RetweetStyles.likesAmountContainer}>
                  <Text style={RetweetStyles.likesAmount}>{post.likes}</Text>
                </View>
              ) : null}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={RetweetStyles.like}>
              <AntDesign
                name="like2"
                size={30}
                color="black"
                onPress={handleLikedPost}
              />
              {post.likes > 0 ? (
                <View style={RetweetStyles.likesAmountContainer}>
                  <Text style={RetweetStyles.likesAmount}>{post.likes}</Text>
                </View>
              ) : null}
            </TouchableOpacity>
          )}
          {isRetweetedPost ? (
            <TouchableOpacity style={RetweetStyles.retweet}>
              <Entypo
                name="retweet"
                size={33}
                color="#003585"
                onPress={handleRemoveRetweet}
              />
              {post.retweets > 0 ? (
                <View style={RetweetStyles.retweetsAmountContainer}>
                  <Text style={RetweetStyles.retweetsAmount}>
                    {post.retweets}
                  </Text>
                </View>
              ) : null}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={RetweetStyles.retweet}>
              <Entypo
                name="retweet"
                size={33}
                color="black"
                onPress={handleRetweetPost}
              />
              {post.retweets > 0 ? (
                <View style={RetweetStyles.retweetsAmountContainer}>
                  <Text style={RetweetStyles.retweetsAmount}>
                    {post.retweets}
                  </Text>
                </View>
              ) : null}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default observer(RetweetPost);
