import { View, StyleSheet, Image, Text } from "react-native";
import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import InputField from "../Components/Common/InputField";
import lockIcon from "../assets/lock.png";
import emailIcon from "../assets/email.png";
import CustomButton from "../Components/Common/CustomButton";
import { ROUTES } from "../Constants/Routes";

export default function LoginScreen({ navigation }) {

  const [loginData, setLoginData] = useState({ username: "", email: "" });
  const submitForm = () => {
    navigation.navigate(ROUTES.TAB);
  };
  return (
    <View style={style.container}>
      <Image
        source={logo}
        style={style.logo}
      />
      <InputField image={emailIcon}
                  placeholder="User Email"
                  onChangeText={(e) => setLoginData(prev => {
                    {
                      return { ...prev, username: e };
                    }
                  })} />
      <InputField image={lockIcon}
                  placeholder="Password"
                  secure={true}
                  onChangeText={(e) => setLoginData(prev => {
                    {
                      return { ...prev, email: e };
                    }
                  })} />
      <CustomButton onPress={submitForm} title="Login" />
      <Text onPress={()=>navigation.navigate(ROUTES.REGISTER)}
            style={style.register}>Create an account ?</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  register: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
  },

});
