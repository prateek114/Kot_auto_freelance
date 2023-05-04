import { StyleSheet, Text, View,TouchableOpacity, Alert } from 'react-native'
import React,{useState,useRef} from 'react'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import { firebaseConfig } from '../../config'
import Firebase from 'firebase/compat/app'
import { TextInput } from 'react-native-gesture-handler'
import Home from '../screen/Home'

const Verify = ({navigation}) => {
  const [phoneNumber,setPhoneNumber]=useState('');
  const [code,setCode]=useState('');
  const [verificationId,setVerficationId]=useState(null);
  const recaptchaVerifier=useRef(null);

  const sendVerification=()=>{
    const phoneProvider=new Firebase.auth.PhoneAuthProvider();
    phoneProvider.verifyPhoneNumber(phoneNumber,recaptchaVerifier.current)
    .then(setVerficationId);
    setPhoneNumber('');
  };

  const confirmCode=()=>{
    const credential=Firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
    );

    Firebase.auth().signInWithCredential(credential)
    .then(()=>{
        setCode('')
    })
    .catch((error)=>{
        alert(error);
    })

    Alert.alert(
        'LogIn Successful'
    );

    navigation.navigate('Home');
  }

  return(
    <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
        />
        <Text style={styles.otpText}>
            LogIn using OTP
        </Text>
        <TextInput
            placeholder='Phone Number With Country Code'
            onChangeText={setPhoneNumber}
            keyboardType='phone-pad'
            autoCompleteType='tel'
            style={styles.textInput}
        />

        <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
            <Text style={styles.buttonText}>Send Verification</Text>
        </TouchableOpacity>

        <TextInput
            placeholder='Confirmation Code'
            onChangeText={setCode}
            keyboardType='number-pad'
            style={styles.textInput}
        />

        <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
            <Text style={styles.buttonText}>Confirm Verification</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Verify

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center'
    },
    textInput:{
        paddingTop:40,
        paddingBottom:20,
        paddingHorizontal:20,
        fontSize:24,
        borderBottomColor:'#fff',
        borderBottomWidth:2,
        marginBottom:20,
        textAlign:'center',
        color:'#fff'
    },

    sendVerification:{
        padding:20,
        backgroundColor:'#3498db',
        borderRadius:10,
    },
    sendCode:{
        padding:20,
        backgroundColor:'#9b59b6',
        borderRadius:10
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
    },
    otpText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        margin:20,
    }
});