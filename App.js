import { StyleSheet, Text, View, Button } from 'react-native'
import * as React from 'react'
import * as SplashScreen from 'expo-splash-screen'; 
import {useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screen/Home'
import ChooseLocation from './src/screen/ChooseLocation'
import FlashMessage from "react-native-flash-message";
import Verify from './src/components/Verify'
import Splash from './src/screen/Splash'
import RatingPage from './src/screen/RatingPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from './src/screen/Onboarding';


const Stack=createNativeStackNavigator()

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  // for splash screen
 useEffect(() => {
  async function preventAutoHide() {
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
  }
  preventAutoHide();
  setTimeout(() => {
    setLoading(false);
    SplashScreen.hideAsync();
  }, 10000);

}, []);

  return (
    <>
    <NavigationContainer>
      {loading?<Splash/>:
      <Stack.Navigator>
        
      {isAppFirstLaunched && <Stack.Screen name="Onboarding" component={OnboardingScreen}/>}
      
      <Stack.Screen name="Verify" component={Verify}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="ChooseLocation" component={ChooseLocation}/>
      <Stack.Screen name="RatingPage" component={RatingPage}/>

    </Stack.Navigator>
    }
    
    {/* } */}
      

      <FlashMessage position="top"/>
    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})