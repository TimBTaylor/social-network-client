import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { userInfoStore } from "../store/user";
import { Ionicons } from "@expo/vector-icons";
import { SearchListStyles } from "../styles/SearchListStyles";

export const SearchList = (props) => {
  const user = props.user;

  const handleUserClick = () => {
    userInfoStore.getCurrentUserProfile(user.id, props.navigation);
  };

  return (
    <TouchableOpacity
      style={SearchListStyles.container}
      onPress={handleUserClick}
    >
      {user.profileImage !== null ? null : (
        <Ionicons name="person-circle" size={65} color="black" />
      )}
      <Text style={SearchListStyles.name}>{user.name}</Text>
    </TouchableOpacity>
  );
};
