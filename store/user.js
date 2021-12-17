import axios from "axios";
import { makeObservable, observable, action, runInAction } from "mobx";
import { Alert } from "react-native";
import { postStore } from "./post";

class User {
  id = "";
  name = "";
  email = "";
  profileImage = "";
  constructor() {
    makeObservable(this, {
      id: observable,
      name: observable,
      email: observable,
      profileImage: observable,
      registerUser: action,
      login: action,
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
          runInAction(() => {
            this.id = response.data[[0]].id;
            this.name = response.data[0].name;
            this.email = response.data[0].email;
          });
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
          postStore.getFollowingPost(response.data[0].id, data.navigation);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const userInfoStore = new User();
