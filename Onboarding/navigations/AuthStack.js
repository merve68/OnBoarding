import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoardingScreen from '../Screens/onBoardingScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';

const AppStack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);
  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName="onBoarding"
  } else {
    routeName="Login"
  }
  return (
 
      <AppStack.Navigator header="none">
        <AppStack.Screen name="onBoarding " component={OnBoardingScreen} options={{header:()=>null}} />
        <AppStack.Screen name="Login" component={LoginScreen}  options={{header:()=>null}}/>
        <AppStack.Screen name="SignUp" component={SignUpScreen}/>
      </AppStack.Navigator>
 
  );
};

export default AuthStack;
