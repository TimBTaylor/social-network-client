import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LoginFormStyles } from "../styles/LoginFormStyles";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { userInfoStore } from "../store/user";

export const LoginForm = (props) => {
  const navigation = props.navigation;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    let email = data.email.toLowerCase();
    let password = data.password;
    userInfoStore.login({ email, password, navigation });
  };

  return (
    <View style={LoginFormStyles.container}>
      <Controller
        defaultValue=""
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Email"
            onChangeText={onChange}
            value={value}
            style={
              errors.email ? LoginFormStyles.inputError : LoginFormStyles.input
            }
          />
        )}
        name="email"
      />

      <Controller
        defaultValue=""
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={onChange}
            value={value}
            style={
              errors.email ? LoginFormStyles.inputError : LoginFormStyles.input
            }
          />
        )}
        name="password"
      />
      <TouchableOpacity
        type="submit"
        style={LoginFormStyles.loginButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={LoginFormStyles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
