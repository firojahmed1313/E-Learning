import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CourseList = ({ data }) => {
  //console.log(data);
  const Navigation= useNavigation();

  return (
    <View style={styles.courseDetails}>
      <Image
        resizeMode="cover"
        source={data.image}
        /*source={{
            uri: "https://picsum.photos/200",
          }}*/
        style={[styles.courseImage]}
      />
      
      <Text style={styles.courseHading}>{data.title}</Text>
      <Text style={styles.courseDescription}>{data.description}</Text>
      <View style={styles.ButtonContener}>
        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() => Navigation.navigate("CourseDetails", {
                  courseId: data.id,
                })}

        >
          <Text style={styles.ButtonText}>Course Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CourseList;

const styles = StyleSheet.create({
  courseDetails: {
    //borderColor: "blue",
    //borderWidth: 5,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    width: "90%",
    height: "auto",
    marginHorizontal: "5%",
    shadowColor: '#171717',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginBottom:20
  },
  courseImage: {
    //borderColor: "black",
    //borderWidth: 5,
    borderRadius: 50,
    height: undefined,
    width: "70%",
    aspectRatio: 1,
    marginVertical: 15,
  },
  courseHading: {
    //borderColor: "pink",
    //borderWidth: 5,
    //borderRadius: 10,
    marginVertical: 5,
    fontSize: 28,
    //fontWeight: 400,
  },
  courseDescription: {
    //borderColor: "yellow",
    //borderWidth: 5,
    //borderRadius: 10,
    marginVertical: 15,
    fontSize: 20,
    //fontWeight: 300,
    marginHorizontal:20
  },
  ButtonContener:{
    //borderColor: "black",
    //borderWidth: 5,
    marginBottom:15
  },
  ButtonStyle:{
    
    
    
  },
  ButtonText:{
    paddingHorizontal:10,
    fontSize: 28,
    //fontWeight: 500,
    color:"white",
    backgroundColor:"black",
    borderRadius: 10,

  }
});
