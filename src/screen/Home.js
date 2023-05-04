import { StatusBar } from 'expo-status-bar';
import { useState,useRef,useEffect } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAP_KEY} from '../constants/GoogleMapKey'
import {Marker} from 'react-native-maps';
import imagePath from '../constants/imagePath';
import { locationPermission,getCurrentLocation } from '../helper/helperFunction';

const screen=Dimensions.get('window');
const ASPECT_RATIO=screen.width/screen.height;
const LATITUDE_DELTA=0.0922;
const LONGITUDE_DELTA=LATITUDE_DELTA+ASPECT_RATIO;

export default function Home({navigation}) {
  useEffect(()=>{
    getLiveLocation()
  },[])

  const getLiveLocation= async ()=>{
    const locPermissionDenied=await locationPermission()
    if(locPermissionDenied){
      const {latitude,longitude}=await getCurrentLocation()
      // console.log("res=>>>>",latitude)
    }
  }

  const mapRef=useRef()

  const [state,setState]=useState({
    curLoc:{
      latitude:25.1383,
      longitude:75.8076,
    },

    destinationCords:{
      latitude:25.1580,
      longitude:75.8272,
    }
  })

  // if((curLoc.latitude===25.1383 && curLoc.longitude===75.1383) && (destinationCords.latitude===26.9124 && curLoc.longitude===75.8076)){

  // }

  const {curLoc,destinationCords}=state

  const onPressLocation=()=>{
    navigation.navigate('ChooseLocation',{getCordinates:fetchValues})
  }

  const fetchValues=(data)=>{
    setState({
      curLoc:{
        latitude:data.curLoc.latitude,
        longitude:data.curLoc.longitude,
      },
      destinationCords:{
        latitude:data.destinationCords.latitude,
        longitude:data.destinationCords.longitude,
      }
    })
  }

  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          initialRegion={{
            ...curLoc,
            latitudeDelta:LATITUDE_DELTA,
            longitudeDelta:LONGITUDE_DELTA
          }}
        >

          <Marker
            image={imagePath.icCurLoc}
            coordinate={curLoc}
            style={{width: 10, height: 10}}
          />

          {Object.keys(destinationCords).length>0 && (<Marker
            image={imagePath.icGreenMarker}
            coordinate={destinationCords}
            style={{width: 26, height: 28}}
          />)}

          {Object.keys(destinationCords).length>0 && (<MapViewDirections
              origin={curLoc}
              destination={destinationCords}
              apikey={GOOGLE_MAP_KEY}
              strokeWidth={3}
              strokeColor="black"
              optimizeWaypoints={true}
              onReady={result=>{
                mapRef.current.fitToCoordinates(result.coordinates,{
                  edgePadding:{
                    right:30,
                    bottom:300,
                    left:30,
                    top:100
                  }
                })
              }}

              onError={(errorMessage)=>{

              }}
            />)}

        </MapView>
      </View>

      <View>
        <Text style={styles.bottomCard}>Where are you going?</Text>
        <TouchableOpacity onPress={onPressLocation} style={styles.inputStyle}>
          <Text>Choose Your Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomCard:{
    backgroundColor:'white',
    width:'100%',
    padding:30,
    borderTopEndRadius:24,
    borderTopStartRadius:24
  },

  inputStyle:{
    backgroundColor: 'white',
      borderRadius: 4,
      borderWidth: 1,
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      marginTop: 16
  }
});
