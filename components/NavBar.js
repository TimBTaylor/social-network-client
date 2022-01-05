import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { NavBarStyles } from "../styles/NavBarStyles";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { userInfoStore } from "../store/user";
import { SearchList } from "./SearchList";

export const NavBar = (props) => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const allUsers = userInfoStore.allUsers;

  let filteredUsers = allUsers.filter((user) => {
    let lowerCaseName = user.name.toLowerCase();
    let lowerCaseInput = searchInput;
    if (searchInput.length > 0) {
      lowerCaseInput = searchInput.toLowerCase();
    }
    if (lowerCaseName.includes(lowerCaseInput)) {
      return user;
    }
  });

  useEffect(() => {
    userInfoStore.getAllUsers();
  });
  return (
    <>
      <View style={NavBarStyles.container}>
        <View style={NavBarStyles.brandAndSearch}>
          <Text style={NavBarStyles.brand}>Social Network</Text>
          <TouchableOpacity
            style={NavBarStyles.searchContainer}
            onPress={() => setSearchActive(!searchActive)}
          >
            <EvilIcons name="search" size={35} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      {searchActive ? (
        <View style={NavBarStyles.searchCcontainer}>
          <View style={NavBarStyles.searchActiveContainer}>
            <TouchableOpacity
              onPress={() => setSearchActive(false)}
              style={NavBarStyles.arrow}
            >
              <Ionicons name="chevron-back" size={28} color="black" />
            </TouchableOpacity>
            <TextInput
              style={NavBarStyles.input}
              onChangeText={(e) => setSearchInput(e)}
              value={searchInput}
              placeholder="Search for people"
            />
          </View>
          <ScrollView>
            {filteredUsers.map((user) => {
              if (user.name !== userInfoStore.name) {
                return (
                  <SearchList
                    key={user.id}
                    user={user}
                    navigation={props.navigation}
                  />
                );
              }
            })}
          </ScrollView>
        </View>
      ) : null}
    </>
  );
};
