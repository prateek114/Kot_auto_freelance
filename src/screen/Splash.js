import * as Animatable from "react-native-animatable";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useRef, useEffect } from "react";
import { Dimensions } from "react-native";

const Splash = () => {
  const { width } = Dimensions.get("window");
  return (
    <ImageBackground
      source={require("../assets/images/splash.png")}
      style={[splashStyle.imageBackground, { width: width }]}
       imageStyle={splashStyle.imageStyle}
    >
    <View style={splashStyle.overlay} />
      <Animatable.Text animation="slideInDown" delay={1000}>
        <View style={splashStyle.textContainer}>
          <Text style={splashStyle.text}>Kota Auto</Text>
        </View>
      </Animatable.Text>
      <Animatable.Text animation="zoomIn" delay={2000}>
        <View style={splashStyle.textContainer}>
          <Text style={splashStyle.text2}>Freelance</Text>
        </View>
      </Animatable.Text>
      <View style={{ position: "absolute", bottom: 0, padding: 30 }}>
        <Text style={{ color: "#fff", fontSize: 15 }}>
          No Comission || Open Mobility App
        </Text>
      </View>
    </ImageBackground>
  );
};

const splashStyle = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    height:'100%'
  },
  imageStyle: {
    opacity:0.8, // Adjust the opacity value as needed
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the opacity value as neededght:'
    height:'100%'
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#ebeae1",
    textAlign: "center",
  },
  text2: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#08fcd0",
    textAlign: "center",
  },
});
export default Splash;