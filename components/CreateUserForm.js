import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { UserFormStyles } from "../styles/UserFormStyles";
import { userInfoStore } from "../store/user";
import { observer } from "mobx-react";

export const CreateUserForm = observer((props) => {
  const navigation = props.navigation;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    let email = data.email.toLowerCase();
    let name = data.name;
    let password = data.password;
    userInfoStore.registerUser({ email, name, password, navigation });
  };

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
            secureTextEntry={true}
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
        style={UserFormStyles.registerButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={UserFormStyles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
});
