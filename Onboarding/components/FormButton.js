import React from 'react'
import { View, Text, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import {windowHeight,windowWidth} from "../utils/Diemonans"

export default function FormButton({buttonTitle, ...rest}) {
    return (
        <TouchableOpacity style={style.buttonContainer}>
            <Text style={style.buttonText}>
                {buttonTitle}
            </Text>
        </TouchableOpacity>
    )
}

const style=StyleSheet.create({
    buttonContainer:{
        marginTop:10,
        width:"100%",
        height:windowHeight / 15,
        backgroundColor:"#2e64e5",padding:10,
        justifyContent:"center",
        alignItems: "center",
        borderRadius:3
    },
    buttonText:{
        fontSize:18,
        fontWeight:"bold",
        color:"#fff",
        fontFamily:"Lato-Regular"
    }
})
