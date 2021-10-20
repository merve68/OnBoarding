import React, { useContext } from "react";
import {StyleSheet, TouchableOpacity, View,Text} from "react-native";
import { AuthContext } from "../navigations/AuthProvider";
import { windowHeight } from "../utils/Diemonans";

const HomeScreen = () =>{
    const {user,logout} = useContext(AuthContext)
return(
<View>
        <TouchableOpacity style={style.button}
        onPress={() => logout() }><Text style ={style.buttonText}>Logout</Text></TouchableOpacity>
       </View>
)
}

const style=StyleSheet.create({
    container:{},
    button:{
        marginTop:10,
        width:"100%",
        height:windowHeight / 15,
        backgroundColor:"#2e64e5",padding:10,
        justifyContent:"center",
        alignItems: "center",
        borderRadius:3
      },buttonText:{
        fontSize:18,
        fontWeight:"bold",
        color:"#fff",
        fontFamily:"Lato-Regular"
      }
})

export default HomeScreen;