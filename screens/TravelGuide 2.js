import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet,Image, ImageBackground, View, Text, SafeAreaView, Dimensions, ScrollView } from "react-native";
import { SearchForm } from "../components";
import { BlurView } from 'expo-blur';
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from 'expo-linear-gradient';

// import ScrollingParagraphs from "../components/ScrollingPara";


// const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg'
//const uri = '/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/Shadow_Realm_resize.png'
// import { LinearGradient } from "expo-linear-gradient";
// import { Image } from "expo-image";


const TravelGuide = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Image style={[styles.backgroundImage, StyleSheet.absoluteFill]} source={{uri}} /> */}
      {/* <LinearGradient style={styles.rectangleLineargradient} locations={[0,1]} colors={['rgba(4, 8, 19, 0.89)','#000']} useAngle={true} angle={180} />; */}
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(1, 11, 21, 0.66)','#000']}
        style={styles.rectangleLineargradient}
      />
      <View contentContainerStyle= {{
          flex: 1,
          width: '100%',
          height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
        }}> 
        <View style={styles.login}>
          <BlurView tint="default" intensity={15} >
            <ScrollingParagraphs />
          </BlurView>
        </View>
           
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
  login: {
    width: 356,
    height: 677,
    borderColor: 'rgba(0, 178, 255, 0.5)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    alignItems: 'center',
    overflow: "hidden", 
  },
  rectangleLineargradient: {
    top: 519,
    width: 468,
    height: 468,
    backgroundColor: "transparent",
    position: "absolute"
  }

}) 

export default TravelGuide;
