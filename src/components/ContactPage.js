import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactPage = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Form</Text>
      
      <View style={styles.inputContainer}><Text></Text></View>
    </View>
  )
}

export default ContactPage

const styles = StyleSheet.create({
    mainContainer:{
        height:'100%',
        paddingHorizontal:30,
        paddingTop:30,
        backgroundColor:'#fff',
    },

    mainHeader:{
        fontSize:25,
        color:"#344055",
        fontWeight:"500",
        paddingTop:20,
        paddingBottom:15,
    }
})