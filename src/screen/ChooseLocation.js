import { StyleSheet, Text, View,ScrollView,Image,Button ,Alert} from 'react-native'
import AddressPickUp from '../components/AddressPickUp'
import CustomBtn from '../components/CustomBtn'
import React,{useState} from 'react'
import { showError, showSuccess } from '../helper/helperFunction';
import Modal from "react-native-modal";

const ChooseLocation = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  
    // const navigation = useNavigation()

    const [state,setState]=useState({
        pickupCords:{},
        destinationCords:{}
    })

    const {pickupCords,destinationCords}=state

    const checkValid=()=>{
        if(Object.keys(pickupCords).length===0){
            showError("Please enter your drop location")
            return false;
        }
        return true;
    }

    const onDone=()=>{
        const isValid=checkValid()

        if(isValid){
            props.route.params.getCordinates({
                pickupCords,
                destinationCords,
            })
            showSuccess("You can go back now")
            navigation.goBack()
            
        }
        
        toggleModal();
        
     
    }

    const fetchAddressCords = (lat, lng) => {
        setState({
            ...state,pickupCords:{
                latitude:lat,
                longitude:lng,
            }
        })
    }

    const fetchDestinationCords = (lat, lng) => {
        setState({
            ...state,destinationCords:{
                latitude:lat,
                longitude:lng,
            }
        })
    }

  return (
    <View style={styles.container}>
        <ScrollView 
            keyboardShouldPersistTaps="handled"
            style={{backgroundColor:'white',flex:1,padding:24}}>
            <AddressPickUp placeholderText="Enter your pickup location" fetchAddress={fetchAddressCords}/>

            <View style={{marginBottom:16}}/>
            <AddressPickUp placeholderText="Enter your destination location" fetchAddress={fetchDestinationCords}/>

            <CustomBtn
                btnText="Done"
                onPress={onDone}
                btnStyle={{marginTop: 24}}
            />
        </ScrollView>
        <Modal isVisible={isModalVisible}>
            <View>
                
                <Text>Rupees 50</Text>
                <Text>3.9km</Text>
            

                <View>
                <Button style={styles.button}
                color={'#E8BD0D'}
                        title="Request to ride"
                        // onPress={()=>Alert.alert('Ride Confirm!!!')}
                        onPress={()=>navigation.navigate('RatingPage')}
                    
                    />
                </View>

                <View>
                    <Button style={{margin:20
                    }}
                    color={'#E8BD0D'}
                        title="Cancel ride"
                        onPress={()=>Alert.alert('Ride Cancelled')}
                    />
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default ChooseLocation

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth:2,
        borderColor:'black',
        borderStyle:'solid'
    },
    button:{
        textAlign:'center',
        fontSize:10,
        width:12,
        borderRadius:'center',
        margin:20,
        backgroundColor:'#E8BD0D'
    },
    text:{
    textAlign:'center',
    fontSize:20,
    fontColor:'white'
    }
})