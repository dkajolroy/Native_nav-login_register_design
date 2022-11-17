import { View, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Logo from "../assets/logo.jpg"
import { ROUTES } from '../Constants/Routes';
export default function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(ROUTES.LOGIN)
        }, 3000);
    }, [])

    return (
        <View style={style.container}>
            <Image style={style.logo} source={Logo} />
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
        width: 250,
        height: 250,
        alignSelf: 'center',
        borderRadius: 100,
        resizeMode: "cover"
    }
})
