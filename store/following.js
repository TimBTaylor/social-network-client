import axios from "axios";
import { makeObservable, observable, action, runInAction } from "mobx";
import { userInfoStore } from "./user";

class Following {
  usersFollowers = [];
  usersFollowing = [];

  constructor() {
    makeObservable(this, {
      usersFollowers: observable,
      usersFollowing: observable,
      userFollowThemselves: action,
      followUser: action,
      unfollowUser: action,
    });
  }

  async userFollowThemselves(userID) {
    await axios({
      method: "post",
      url: `http://localhost:3001/following/${userID}`,
    })
      .then((response) => {
        if (response.status !== 201) {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }

  //follow a user
  async followUser(userID, followUserID, navigation) {
    await axios({
      method: "post",
      url: "http://localhost:3001/following/user/follow",
      header: { "Content-Type": "application/json" },
      data: {
        userID,
        followUserID,
      },
    })
      .then((response) => {
        if (response.status === 201) {
          userInfoStore.getCurrentUserProfile(followUserID, navigation);
          userInfoStore.getUserFollowingCount(userID);
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }

  //unfollow a user
  async unfollowUser(userID, unFollowUserID, navigation) {
    await axios({
      method: "post",
      url: "http://localhost:3001/following/user/unfollow",
      header: { "Content-Type": "application/json" },
      data: {
        userID,
        unFollowUserID,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          userInfoStore.getCurrentUserProfile(unFollowUserID, navigation);
          userInfoStore.getUserFollowingCount(userID);
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }
}

export const followingStore = new Following();
