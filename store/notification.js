import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";

class Notifications {
  viewedNotifications = [];
  notViewedNotifications = [];
  currentNotificationView = [];

  constructor() {
    makeObservable(this, {
      viewedNotifications: observable,
      notViewedNotifications: observable,
      currentNotificationView: observable,
      getNotViewedNotifications: action,
      getViewedNotifications: action,
      viewAllNotifications: action,
    });
  }

  //set current notification view
  updateCurrentNotification(notification) {
    this.currentNotificationView = notification;
  }

  //create new notication
  async createNewNotification(data) {
    await axios({
      method: "post",
      url: "http://localhost:3001/notification/new-notification",
      header: { "Content-Type": "application/josn" },
      data: {
        userForID: data.userForID,
        userFromID: data.userFromID,
        userFromImage: data.userFromImage,
        text: data.text,
        viewed: data.viewed,
        postID: data.postID,
        date: new Date(),
        retweet: data.retweet,
      },
    })
      .then((response) => {
        if (response.status !== 201) {
          console.log(response);
        } else {
          console.log("Notification sent");
        }
      })
      .catch((err) => console.log(err));
  }

  //get all not view
  async getNotViewedNotifications(userID) {
    await axios({
      method: "get",
      url: `http://localhost:3001/notification/${userID}/not-viewed`,
    })
      .then((response) => {
        if (response.status === 200) {
          runInAction(() => {
            this.notViewedNotifications = response.data.reverse();
          });
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }

  //get all viewed notification
  async getViewedNotifications(userID) {
    await axios({
      method: "get",
      url: `http://localhost:3001/notification/${userID}/viewed`,
    })
      .then((response) => {
        if (response.status === 200) {
          runInAction(() => {
            this.viewedNotifications = response.data.reverse();
          });
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }

  //view all unviewed notifications
  async viewAllNotifications(userID) {
    await axios({
      method: "put",
      url: `http://localhost:3001/notification/${userID}/view-all`,
    })
      .then((response) => {
        if (response.status === 200) {
          this.getNotViewedNotifications(userID);
          this.getViewedNotifications(userID);
        }
      })
      .catch((err) => console.log(err));
  }
}

export const notificationStore = new Notifications();
