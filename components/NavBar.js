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
    </View>
  );
};
