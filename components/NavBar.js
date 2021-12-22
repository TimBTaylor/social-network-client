import React from "react";
import { View, Text } from "react-native";
import { NavBarStyles } from "../styles/NavBarStyles";
import { EvilIcons } from "@expo/vector-icons";

export const NavBar = (props) => {
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
