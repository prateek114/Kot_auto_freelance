import { StyleSheet, Text, View,Image } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_KEY } from '../constants/GoogleMapKey';
import React from 'react'

const AddressPickUp = ({
    placeholderText,
    fetchAddress
}) => {

    const onPressAddress = (data, details) => {
        // console.log("details==>>>>", details)

        // let resLength = details.address_components
        // let zipCode = ''

        // let filtersResCity = details.address_components.filter(val => {
        //     if (val.types.includes('locality') || val.types.includes('sublocality')) {
        //         return val
        //     }
        //     if (val.types.includes('postal_code')) {
        //         let postalCode = val.long_name
        //         zipCode = postalCode
        //     }
        //     return false
        // })

        // let dataTextCityObj = filtersResCity.length > 0
        //     ? filtersResCity[0] :
        //     details.address_components[
        //     resLength > 1 ? resLength - 2 : resLength - 1
        //     ];

        // let cityText =
        //     dataTextCityObj.long_name && dataTextCityObj.long_name.length > 17
        //         ? dataTextCityObj.short_name
        //         : dataTextCityObj.long_name;

        // console.log("zip cod found", zipCode)
        // console.log("city namte", cityText)

        const lat = details.geometry.location.lat
        const lng = details.geometry.location.lng
        fetchAddress(lat, lng)



    }

 
        // setTimeout(() =><Image
        //     // style={styles.stretch}
        //     source={require('../Image/raj.jpg')}
        // /> , 1000);
   
    

  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder={placeholderText}
        onPress={onPressAddress}
        // onChangeText={
        //     setTimeout(()=>{
        //         console.warn("hey");
        //     },5000)
        // }
        query={{
            key: GOOGLE_MAP_KEY,
            language: 'en',
        }}

        styles={{
            textInputContainer: styles.containerStyle,
            textInput: styles.textInputStyle
        }}
        />
    </View>
  )
}

export default AddressPickUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerStyle: {
        backgroundColor: 'white'
    },
    textInputStyle: {
        height: 48,
        color: 'black',
        fontSize: 16,
        backgroundColor: '#f3f3f3'
    }
})