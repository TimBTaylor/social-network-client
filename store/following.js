import axios from "axios";
import { makeObservable, observable, action, runInAction } from "mobx";

class Following {
  usersFollowers = [];
  usersFollowing = [];

  constructor() {
    makeObservable(this, {
      usersFollowers: observable,
      usersFollowing: observable,
      userFollowThemselves: action,
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
}

export const followingStore = new Following();
