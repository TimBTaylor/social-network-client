import React from "react";
import { View, Text, Image } from "react-native";
import network from "../images/world.png";
import { LandingStyles } from "../styles/LandingStyles";
import { LoginForm } from "../components/LoginForm";

export const Landing = () => {
  return (
    <>
      <View style={LandingStyles.colorContainer}>
        <View style={LandingStyles.blueContainer}></View>
        <Image style={LandingStyles.image} source={network} />
        <Text style={LandingStyles.socialNetwork}>Social Network</Text>
        <Text style={LandingStyles.alwaysConnected}>Always be connected</Text>
        <LoginForm />
      </View>
    </>
  );
};
