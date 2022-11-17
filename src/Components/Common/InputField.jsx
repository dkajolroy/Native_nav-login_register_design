import { View, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'

export default function InputField({ secure, image, placeholder, onChangeText }) {
    return (
        <View style={style.container}>
            <Image source={image} style={style.image} />
            <TextInput
                onChangeText={onChangeText}
                secureTextEntry={secure || false}
                placeholder={placeholder}
                style={style.input} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "85%",
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: 'teal',
        borderStyle: 'solid',
        borderRadius: 30,
        paddingHorizontal: 10
    },
    input: {
        width: "100%",
        fontSize: 18,
        paddingLeft: 10
    },
    image: {
        width: 25,
        height: 25
    }
})