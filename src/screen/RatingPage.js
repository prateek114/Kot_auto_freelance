import { Rating, AirbnbRating } from 'react-native-ratings';
import { View, Text, SafeAreaView ,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
// App.jsx
import Toast from 'react-native-toast-message';

export default function RatingPage(){
  return (
  <SafeAreaView  style={styles.container}>
 
  <Text style={{fontSize:25}}>Rate your ride</Text>
      <AirbnbRating 
    count = {5}
    defaultRating = {0}
    onFinishRating={this.ratingCompleted}
    />
    <TextInput
        multiline
        numberOfLines={5}
        // onChangeText={handleTextChange}
        // value={paragraph}
        placeholder="Tells us your experience"
        style = {{border:'4px solid black',width:'80%',padding:5,fontSize:15}}
      />
    <TouchableOpacity
                style={styles.btn}
                onPress={() =>
        Toast.show({
      type: 'success',
      text1: 'Done',
      text2: 'Feedback Successfully Submitted👋'
    })}
                // onPress={() => navigation.replace("HomeScreen")}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}
                >
                 Submit 
                </Text>
              </TouchableOpacity>
               <Toast position='bottom'bottomOffset={20}/>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    height: 60,
    width:'100%',
    borderRadius: 20,
    backgroundColor: "#2e3030",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding:20,
    marginBottom:40,
  },
});