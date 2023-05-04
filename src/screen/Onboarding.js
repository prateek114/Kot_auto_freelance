import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
import Verify from "../components/Verify";

const slides = [
  {
    id: "1",
    title: "Request Ride",
    subtitle:
      "Request a ride and get picked up by a best community driver nearby",
    image: require("../assets/images/bookRide.jpg"),
  },
  {
    id: "2",
    title: "Confirm Your Driver",
    subtitle:
      "Best rated driver will be selected from driver community for having a comfortable ride",
    image: require("../assets/images/diverList.jpg"),
  },
  {
    id: "3",
    title: "Track Your Ride",
    subtitle:
      "Know your driver in advance and able to view real-time location on map",
    image: require("../assets/images/track.jpg"),
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center",width:width,height:"100%"}}>
      <Image
        source={item.image}
        style = {{
            // width:'99%',height:'300px',marginTop:'20px'
            height:300,marginTop:30,width:'100%'
        }}
      />
      <View style = {{width:width,alignItems:'center',marginTop:40}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: "#000",
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={()=>{navigation.navigate('Verify')}}
                // onPress={() => navigation.replace("HomeScreen")}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}
                >
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: "#000",
                    borderWidth: 1,
                    backgroundColor: "transparent",
                  },
                ]}
                onPress={skip}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#000",
                  }}
                >
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "#787373",
    fontSize: 17,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: "#2b2a2a",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "#209bba",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#2e3030",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OnboardingScreen;