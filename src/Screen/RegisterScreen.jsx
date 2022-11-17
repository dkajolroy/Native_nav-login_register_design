import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import InputField from "../Components/Common/InputField";
import emailIcon from "../assets/email.png";
import lockIcon from "../assets/lock.png";
import userIcon from "../assets/user.png";
import CustomButton from "../Components/Common/CustomButton";
import { ROUTES } from "../Constants/Routes";

export default function RegisterScreen({navigation}) {

  const [loginData, setLoginData] = useState({name:"", password: "", email: "" });
  const submitForm = () => {
    navigation.navigate(ROUTES.TAB);
  };
    return (
      <View style={style.container}>
        <Image
          source={logo}
          style={style.logo}
        />
        <InputField image={userIcon}
                    placeholder="Full Name"
                    onChangeText={(e) => setLoginData(prev => {
                      {
                        return { ...prev, name: e };
                      }
                    })} />

        <InputField image={emailIcon}
                    placeholder="Email Address"
                    onChangeText={(e) => setLoginData(prev => {
                      {
                        return { ...prev, email: e };
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
        <CustomButton onPress={submitForm} title="Register" />
        <Text onPress={()=>navigation.navigate(ROUTES.LOGIN)}
              style={style.register}>Login my account ?</Text>
      </View>
    )
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
