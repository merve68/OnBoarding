import React ,{useContext} from 'react';
import {Button, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {windowHeight,windowWidth} from "../utils/Diemonans"
import {AuthContext} from '../navigations/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const {login} = useContext(AuthContext);
  return (
      <ScrollView>
    <View style={style.container}>
      <Image
        source={require('../assets/images/rn-social-logo.png')}
        style={style.logo}
      />
      <Text style={style.text}>RN Social App</Text>
      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
     <TouchableOpacity style={style.button}
        onPress={() => login(email,password) }><Text style ={style.buttonText}>Sign In</Text></TouchableOpacity>
      <TouchableOpacity style={style.forgotButton}>
          <Text style={style.navButtonText}> Forgot Password</Text>

      </TouchableOpacity>
      <SocialButton
      buttonTitle="Sign In with Facebook"
      btnType="facebook"
      color="#4867aa"
      backgroundColor="#e6eaf4"
      />
       <SocialButton
      buttonTitle="Sign In with Google"
      btnType="google"
      color="#de4d41"
      backgroundColor="#f5e7ea"
      />
      

      <TouchableOpacity style={style.forgotButton} onPress={()=>navigation.navigate("SignUp")}>
          <Text style={style.navButtonText}> Don't have a account? Create Here</Text>
      </TouchableOpacity>
     
    </View>
    </ScrollView>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
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
});
