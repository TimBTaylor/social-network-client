import axios from "axios";
import { makeObservable, observable, action, runInAction } from "mobx";

class Post {
  followingPost = [];
  likedPost = [];
  retweetedPost = [];

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

  //post the user has retweeted
  async getRetweetedPost(userID) {
    await axios({
      method: "get",
      url: `http://localhost:3001/post/${userID}/posts/retweeted`,
    })
      .then((response) => {
        if (response.status === 200) {
          runInAction(() => {
            this.retweetedPost = response.data;
          });
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }

  //like a post
  async likePost(data) {
    await axios({
      method: "post",
      url: "http://localhost:3001/post/add-like",
      header: { "Content-Type": "application/json" },
      data: {
        likesAmount: data.likesAmount,
        postID: data.postID,
        postedByID: data.postedByID,
        likedByID: data.likedByID,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          this.getLikedPost(data.likedByID);
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }

  //remove like from a post
  async removeLikeFromPost(data) {
    await axios({
      method: "post",
      url: "http://localhost:3001/post/remove-like",
      header: { "Content-Type": "application/json" },
      data: {
        likesAmount: data.likesAmount,
        postID: data.postID,
        postedByID: data.postedByID,
        likedByID: data.likedByID,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          this.getLikedPost(data.likedByID);
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }

  //retweet a post
  async retweetPost(data) {
    await axios({
      method: "put",
      url: "http://localhost:3001/post/remove-like",
      header: { "Content-Type": "application/json" },
      data: {
        retweetsAmount: data.retweetsAmount,
        postByID: data.postByID,
        text: data.text,
        date: data.date,
        userName: data.userName,
        userImage: data.userImage,
        postImage: data.postImage,
        retweet: data.retweet,
        originalPostedByID: data.originalPostedByID,
        originalPostedByName: data.originalPostedByName,
        originalPostedByImage: data.originalPostedByImage,
        originalPostedByDate: data.originalPostedByDate,
        originalPostID: data.originalPostID,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          this.getRetweetedPost(data.postByID);
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }
}

export const postStore = new Post();
