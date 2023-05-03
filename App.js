import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screen/Home'
import ChooseLocation from './src/screen/ChooseLocation'
import FlashMessage from "react-native-flash-message";

const Stack=createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ChooseLocation" component={ChooseLocation}/>
      </Stack.Navigator>

      <FlashMessage position="top"/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})