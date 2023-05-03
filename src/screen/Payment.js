import { StyleSheet, Text, View,Image, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Payment = (props) => {
    
  return (
    <View>
      <Text>Rupees 55</Text>
      <Text>1.5 Kms </Text>
      <Button>Request Ride</Button>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({})