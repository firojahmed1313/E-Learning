import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const About = () => {
  const Navigation = useNavigation();

  const about =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  ";

  return (
    <ScrollView style={[styles.aboutcon]}>
      <View style={[styles.aboutImage]}>
        <Image
          resizeMode="contain"
          source={require("../../assets/avatar.png")}
          style={[styles.headerImage]}
        />
      </View>
      <View style={[styles.aboutDetails]}>
        <Text style={[styles.aboutDet]}>{about}</Text>
      </View>
      <View style={[styles.aboutIcon]}>
        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() => Linking.openURL("https://www.facebook.com/")}
        >
          <Image
            resizeMode="cover"
            //source={item.image}
            source={{
              uri: "https://img.icons8.com/3d-fluency/94/facebook-circled.png",
            }}
            style={[styles.iconImage]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/md-firoj-ahmed-8209a01bb/"
            )
          }
        >
          <Image
            resizeMode="cover"
            //source={item.image}
            source={{
              uri: "https://img.icons8.com/3d-fluency/94/linkedin.png",
            }}
            style={[styles.iconImage]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/firojahmed1313/")
          }
        >
          <Image
            resizeMode="cover"
            //source={item.image}
            source={{
              uri: "https://img.icons8.com/3d-fluency/94/instagram-new.png",
            }}
            style={[styles.iconImage]}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  aboutcon: {
    //marginHorizontal:10,
    //borderColor: "blue",
    //borderWidth: 5,
    borderRadius: 10,
    shadowOffset: { width: 4, height: -4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  aboutImage: {
    marginHorizontal: 30,
    marginVertical: 20,
  },

  headerImage: {
    //borderColor: "black",
    //borderRadius: "50%",
    height: undefined,
    width: "90%",
    aspectRatio: 1,
    //borderWidth:5,
    marginHorizontal: "auto",

    display: "flex",
    marginBottom: 50,
  },
  aboutIcon: {
    marginHorizontal: "5%",
    //borderColor: "blue",
    //borderWidth: 5,
    borderRadius: 10,
    height: 90,
    width: "90%",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 80,
  },
  ButtonStyle: {
    //borderColor: "black",
    width: "30%",
    //borderWidth: 5,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  iconImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
  },
  aboutDetails: {
    //borderColor: "blue",
    //borderWidth: 5,
    borderRadius: 10,

    marginHorizontal: 15,
    marginBottom: 30,
  },
  aboutDet: {
    fontSize: 24,
    fontWeight: 400,
  },
});
