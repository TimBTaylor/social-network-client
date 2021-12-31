import axios from "axios";
import { makeObservable, observable, action, runInAction } from "mobx";
import { Alert } from "react-native";
import { postStore } from "./post";
import { followingStore } from "./following";
import { notificationStore } from "./notification";

class User {
  id = "";
  name = "";
  email = "";
  profileImage = "";
  followerAmount = "";
  followingAmount = "";
  constructor() {
    makeObservable(this, {
      id: observable,
      name: observable,
      email: observable,
      profileImage: observable,
      followerAmount: observable,
      followingAmount: observable,
      registerUser: action,
      login: action,
      getUserFollowerCount: action,
      getUserFollowingCount: action,
    });
  }

  //register user
  async registerUser(data) {
    console.log(data);
    await axios({
      method: "post",
      url: "http://localhost:3001/user/register",
      header: { "Content-Type": "applicaton/json" },
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    })
      .then((response) => {
        console.log(response.data);
        if (response.status === 201) {
          //need to create a server side request for new following, the user needs to follow themselves so their post show up in news feed
          runInAction(() => {
            this.id = response.data[0].id;
            this.name = response.data[0].name;
            this.email = response.data[0].email;
          });
          followingStore.userFollowThemselves(response.data[0].id);
          Alert.alert(
            "Account created",
            "You can now sign in with this account",
            [
              {
                //home is test trying to figure out how to route
                text: "Login",
                onPress: () => data.navigation.push("Landing"),
              },
            ]
          );
        } else if (response.data === "Account exists with that email") {
          Alert.alert(
            "Account already exist",
            "Email address has been registered",
            [{ text: "OK" }]
          );
        }
      })
      .catch((err) => console.log(err));
  }

  //user login
  async login(data) {
    await axios({
      method: "post",
      url: "http://localhost:3001/user/login",
      header: { "Content-Type": "application/json" },
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then((response) => {
        if (response.data === "Wrong email/password combination") {
          Alert.alert(
            "Incorrect Login",
            "The information you have entered does not match",
            [{ text: "OK" }]
          );
        } else if (response.data === "Email not found") {
          Alert.alert(
            "Email not found",
            "The email you have entered does not exist",
            [{ text: "OK" }]
          );
        } else if (response.status === 200) {
          runInAction(() => {
            this.id = response.data[0].id;
            this.name = response.data[0].name;
            this.email = response.data[0].email;
            this.profileImage = response.data[0].profileImage;
          });
          postStore.getUsersPost(response.data[0].id);
          postStore.getRetweetedPost(response.data[0].id);
          postStore.getLikedPost(response.data[0].id);
          postStore.getFollowingPost(response.data[0].id, data.navigation);
          this.getUserFollowerCount(response.data[0].id);
          this.getUserFollowingCount(response.data[0].id);
          notificationStore.getNotViewedNotifications(response.data[0].id);
          notificationStore.getViewedNotifications(response.data[0].id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async getUserFollowerCount(userID) {
    await axios({
      method: "get",
      url: `http://localhost:3001/user/${userID}/followers`,
    })
      .then((response) => {
        if (response.status === 200) {
          runInAction(() => {
            this.followerAmount = response.data.length;
          });
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }

  async getUserFollowingCount(userID) {
    await axios({
      method: "get",
      url: `http://localhost:3001/user/${userID}/following`,
    })
      .then((response) => {
        if (response.status === 200) {
          runInAction(() => {
            this.followingAmount = response.data.length;
          });
        } else {
          console.log(result);
        }
      })
      .catch((err) => console.log(err));
  }
}

export const userInfoStore = new User();
