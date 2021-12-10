import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Switch } from "react-native";
import { LoginFormStyles } from "../styles/LoginFormStyles";
import { useForm, Controller } from "react-hook-form";

export const LoginForm = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit = (data) => console.log(data);

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
            placeholder="Name"
            onChangeText={onChange}
            value={value}
            style={
              errors.name ? LoginFormStyles.inputError : LoginFormStyles.input
            }
          />
        )}
        name="name"
      />
      {errors.name && (
        <Text style={LoginFormStyles.invalidInput}>Must enter a email</Text>
      )}
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
      {errors.email && (
        <Text style={LoginFormStyles.invalidInput}>Must enter password</Text>
      )}
      <View style={LoginFormStyles.switchContainer}>
        <Text>Create an account</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#feba02" }}
          thumbColor={isEnabled ? "#003585" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
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
