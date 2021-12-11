import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Switch,
} from "react-native";
import network from "../images/world.png";
import { LandingStyles } from "../styles/LandingStyles";
import { LoginForm } from "../components/LoginForm";
import { CreateUserForm } from "../components/CreateUserForm";

export const Landing = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={LandingStyles.colorContainer}>
          <View style={LandingStyles.blueContainer}></View>
          <Image style={LandingStyles.image} source={network} />
          <Text style={LandingStyles.socialNetwork}>Social Network</Text>
          <Text style={LandingStyles.alwaysConnected}>Always be connected</Text>
          {isEnabled ? <CreateUserForm /> : <LoginForm />}
        </View>
      </KeyboardAvoidingView>
      <View style={LandingStyles.switchContainer}>
        <Text style={LandingStyles.createAccount}>Create an account</Text>
        <Switch
          style={LandingStyles.switch}
          trackColor={{ false: "#767577", true: "#feba02" }}
          thumbColor={isEnabled ? "#003585" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </>
  );
};
