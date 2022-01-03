import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Landing } from "./screens/Landing";
import { Home } from "./screens/Home";
import { Post } from "./screens/Post";
import { Profile } from "./screens/Profile";
import { Notifications } from "./screens/Notifications";
import { NotificationView } from "./screens/NotificationView";
import { UsersProfile } from "./screens/UsersProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ animationsEnabled: false }}
      >
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="NotificationView"
          component={NotificationView}
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="visitingProfile"
          component={UsersProfile}
          options={{ headerShown: false, animation: "none" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
