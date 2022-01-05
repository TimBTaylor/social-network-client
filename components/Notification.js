import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { observer } from "mobx-react";
import { NotificationStyles } from "../styles/Notification/Notifcation";
import { notificationStore } from "../store/notification";
import { Ionicons } from "@expo/vector-icons";
import { userInfoStore } from "../store/user";
import { postStore } from "../store/post";
import BobsProfilePicture from "../images/randomguy.jpeg";

const Notification = (props) => {
  const viewedNotifications = notificationStore.viewedNotifications;
  const notViewNotifications = notificationStore.notViewedNotifications;

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
      return (
        <Text style={NotificationStyles.timeDifference}>{timeDiff.days}d</Text>
      );
    } else if (timeDiff.hours >= 1) {
      return (
        <Text style={NotificationStyles.timeDifference}>{timeDiff.hours}h</Text>
      );
    } else if (timeDiff.minutes >= 1) {
      return (
        <Text style={NotificationStyles.timeDifference}>
          {timeDiff.minutes}min
        </Text>
      );
    } else {
      return (
        <Text style={NotificationStyles.timeDifference}>
          {timeDiff.seconds}s
        </Text>
      );
    }
  }

  function handleNotificationView(notificationData) {
    let currentView = postStore.usersPost.filter((post) => {
      return post.postID === notificationData.postID;
    });
    notificationStore.updateCurrentNotification(currentView);
    notificationStore.viewAllNotifications(userInfoStore.id);
    props.navigation.push("NotificationView");
  }

  return (
    <View style={NotificationStyles.container}>
      <View style={NotificationStyles.headerContainer}>
        <Text style={NotificationStyles.header}>Notifications</Text>
      </View>
      <ScrollView>
        {notViewNotifications.map((notification) => {
          return (
            <TouchableOpacity
              style={NotificationStyles.notViewedNotificationContainer}
              key={notification.id}
              onPress={() => handleNotificationView(notification)}
            >
              {notification.userFromImage !== null ? null : (
                <Ionicons name="person-circle" size={60} color="black" />
              )}
              <View style={NotificationStyles.textAndDate}>
                <Text style={NotificationStyles.text}>{notification.text}</Text>
                <Text>{postTimeDisplay(notification.date)}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
        {viewedNotifications.map((notification) => {
          return (
            <TouchableOpacity
              key={notification.id}
              style={NotificationStyles.viewedNotificationContainer}
              onPress={() => handleNotificationView(notification)}
            >
              {notification.userFromID === 39 ? (
                <Image
                  source={BobsProfilePicture}
                  style={NotificationStyles.profilePic}
                />
              ) : (
                <Ionicons name="person-circle" size={60} color="black" />
              )}
              <View stlye={NotificationStyles.textAndDate}>
                <Text style={NotificationStyles.text}>{notification.text}</Text>
                <Text>{postTimeDisplay(notification.date)}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
        {viewedNotifications.length === 0 &&
        notViewNotifications.length === 0 ? (
          <Text style={NotificationStyles.noNotifications}>
            No Notifications
          </Text>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default observer(Notification);
