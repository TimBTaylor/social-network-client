import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavBarStyles } from "../styles/NavBarStyles";
import { EvilIcons } from "@expo/vector-icons";
import { userInfoStore } from "../store/user";
import { Ionicons } from "@expo/vector-icons";

export const NavBar = () => {
  return (
    <View style={NavBarStyles.container}>
      <View style={NavBarStyles.brandAndSearch}>
        <Text style={NavBarStyles.brand}>Social Network</Text>
        <View style={NavBarStyles.searchContainer}>
          <EvilIcons name="search" size={35} color="#fff" />
        </View>
      </View>
      <View style={NavBarStyles.postContainer}>
        {userInfoStore.profileImage ? (
          <Image
            source={{ uri: userInfoStore.profileImage }}
            style={NavBarStyles.profileImage}
          />
        ) : (
          <Ionicons
            name="person-circle"
            size={55}
            color="black"
            style={NavBarStyles.defaultProfileImage}
          />
        )}
        <TouchableOpacity style={NavBarStyles.statusInput}>
          <Text style={NavBarStyles.statusText}>What's on your mind?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
