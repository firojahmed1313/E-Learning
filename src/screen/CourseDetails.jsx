import { StyleSheet, Text, View, Image, TouchableOpacity ,ScrollView} from "react-native";
import Courses from "../api/CourseApi";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CourseDetails = ({ navigation, route }) => {
  //console.log(route)
  const Navigation = useNavigation();

  const id = route.params.courseId;
  //console.log(id)
  const CourseDetailsdata = Courses.find((item) => {
    return id === item.id;
  });
  //console.log(CourseDetailsdata)
  return (
    <View style={styles.courseDetails}  >
      <Image
        resizeMode="cover"
        source={CourseDetailsdata.image}
        style={[styles.courseImage]}
      />

      <Text
        style={[
          styles.courseHading,
          {
            textTransform: "uppercase",
          },
        ]}
      >
        {CourseDetailsdata.title}
      </Text>
      <Text style={styles.courseDescription}>
        {CourseDetailsdata.description}
      </Text>

      <Text style={[ styles.subCourse]}>
        {CourseDetailsdata.course1}
      </Text>
      <Text style={[ styles.subCourse]}>
        {CourseDetailsdata.course2}
      </Text>
      <Text style={[ styles.subCourse]}>
        {CourseDetailsdata.course3}
      </Text>

      <Text style={styles.courseHading}>Price : {CourseDetailsdata.price}</Text>

      <View style={styles.ButtonContener}>
        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() => Navigation.navigate("Course")}
        >
          <Text style={styles.ButtonText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  courseDetails: {
    //borderColor: "blue",
    //borderWidth: 5,
    //borderRadius: 10,
    display: "flex",
    //justifyContent: "center",
    textAlign: "center",
    //alignItems: "center",
    width: "90%",
    height: "auto",
    marginHorizontal: "5%",
  },
  courseImage: {
    //borderColor: "black",
    //borderWidth: 5,
    borderRadius: 50,
    height: undefined,
    width: "80%",
    aspectRatio: 1,
    marginVertical: 15,
    alignSelf:"center",
    
  },
  courseHading: {
    //borderColor: "pink",
    //borderWidth: 5,
    //borderRadius: 10,
    marginVertical: 5,
    fontSize: 28,
    //fontWeight: 400,
    alignSelf:"center",

  },
  courseDescription: {
    //borderColor: "yellow",
    //borderWidth: 5,
    //borderRadius: 10,
    marginVertical: 15,
    fontSize: 20,
    //fontWeight: 300,
    marginHorizontal: 20,
    alignSelf:"center",

  },
  subCourse: {
    fontSize: 20,
    fontWeight: 300,
    fontSize: 24,
    //fontWeight: 300,
    textTransform: "uppercase",
    alignSelf:"center",

  },

  ButtonContener: {
    //borderColor: "black",
    //borderWidth: 5,
    marginVertical: 15,
    alignSelf:"center",

  },

  ButtonText: {
    paddingHorizontal: 10,
    fontSize: 28,
    //fontWeight: 500,
    color: "white",
    backgroundColor: "black",
    borderRadius: 10,
    alignSelf:"center",

  },
});
