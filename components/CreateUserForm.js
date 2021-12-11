import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { UserFormStyles } from "../styles/UserFormStyles";

export const CreateUserForm = () => {
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
    <View style={UserFormStyles.container}>
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
              errors.name ? UserFormStyles.inputError : UserFormStyles.input
            }
          />
        )}
        name="name"
      />
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
              errors.email ? UserFormStyles.inputError : UserFormStyles.input
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
            placeholder="Password"
            onChangeText={onChange}
            value={value}
            style={
              errors.email ? UserFormStyles.inputError : UserFormStyles.input
            }
          />
        )}
        name="password"
      />
      <TouchableOpacity
        type="submit"
        style={UserFormStyles.loginButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={UserFormStyles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
