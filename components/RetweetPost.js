import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { RetweetStyles } from "../styles/RetweetStyles";
import { Ionicons } from "@expo/vector-icons";
import { HomeStyles } from "../styles/HomeStyles";
import { EvilIcons } from "@expo/vector-icons";

export const RetweetPost = (props) => {
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
  return (
    <View key={post.postID} style={RetweetStyles.postContainer}>
      <View style={RetweetStyles.postHeader}>
        {post.postedByImage !== null ? (
          <Image source={post.postedByImage} />
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
      </View>
      <View style={RetweetStyles.postBody}>
        <View style={RetweetStyles.retweetBody}>
          <View style={RetweetStyles.retweetHeader}>
            {post.originalPostedByImage !== null ? (
              <Image source={post.originalPostedByImage} />
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
          </View>
          <Text style={RetweetStyles.postText}>{post.text}</Text>
          {post.postImage !== null ? <Image source={post.postImage} /> : null}
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
          <TouchableOpacity>
            <EvilIcons name="like" size={36} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <EvilIcons name="retweet" size={36} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
