import React from "react";
import {Button, View,Text,StyleSheet,Image} from "react-native";

import Onboarding from 'react-native-onboarding-swiper';


const OnBoardingScreen =({navigation})=>{
  
    return(
        <Onboarding
     
        onSkip={()=>navigation.navigate("Login")}
        onDone={()=>navigation.navigate("Login")}
  pages={[
    {
      backgroundColor: '#a6e4d0',
      image: <Image source={require('../assets/images/onboarding-img1.png')} />,
      title: 'Connect to the World',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../assets/images/onboarding-img2.png')} />,
        title: 'Share YOur Favorites',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
   
      {
        backgroundColor: '#e9bceb',
        image: <Image source={require('../assets/images/onboarding-img3.png')} />,
        title: 'Become the Star',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
   
  ]}/>

    )
}

export default OnBoardingScreen;

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})