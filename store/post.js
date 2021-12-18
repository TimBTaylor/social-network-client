import axios from "axios";
import { makeObservable, observable, action, runInAction } from "mobx";

class Post {
  followingPost = [];
  likedPost = [];

  constructor() {
    makeObservable(this, {
      followingPost: observable,
      getFollowingPost: action,
      getLikedPost: action,
    });
  }

  async getFollowingPost(userID, navigation) {
    await axios({
      method: "get",
      url: `http://localhost:3001/post/${userID}/posts/following`,
      header: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          runInAction(() => {
            this.followingPost = response.data.reverse();
          });
          navigation.push("Home");
        } else {
          console.log(response);
          navigation.push("Landing");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //post the users has liked
  async getLikedPost(userID) {
    await axios({
      method: "get",
      url: `http://localhost:3001/post/${userID}/posts/liked`,
    })
      .then((response) => {
        if (response.status === 200) {
          runInAction(() => {
            this.likedPost = response.data;
          });
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }
}

export const postStore = new Post();
