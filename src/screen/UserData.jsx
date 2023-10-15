import {ActivityIndicator, FlatList, StyleSheet, Text, View ,Image,TouchableOpacity,Linking } from 'react-native'
import React, { useEffect, useState } from 'react'

const UserData = () => {
  const [udata,setuData]=useState([]);
  const [isLoaded,setIsLoaded]=useState(true);
  const getuData = async()=>{
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );      
      const realUserData= await response.json();

      setuData(realUserData)
      //console.log(realUserData);
      //console.log("userData");
      setIsLoaded(false)
    } catch (error) {
      console.log(error);
    }
      
  }
  //useEffect(() => getuData(), []);
  useEffect(() => getuData(), []);

  const showData=({item})=>{
      return ( 
      <View style={styles.courseDetails}>
      <Image
        resizeMode="cover"
        //source={item.image}
        source={{
            uri: item.image,
          }}
        style={[styles.courseImage]}
      />
      
      <Text style={styles.courseHading}>Name:{item.name}</Text>
      <Text style={styles.courseHading}>Email:{item.email}</Text>
      <Text style={styles.courseHading}>Phone:{item.mobile}</Text>
      <Text style={styles.courseDescription}>{item.description}</Text>
      <View style={styles.ButtonContener}>
        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() => Linking.openURL(item.website)}

        >
          <Text style={styles.ButtonText}>website</Text>
        </TouchableOpacity>
      </View>

    </View>);
  }

  
  
  
  return (
    (isLoaded)?<ActivityIndicator size="large" color="red"  /> :
    <View>
      
      <FlatList
        keyExtractor={(item) => item.id}

        data={udata}
        renderItem={showData}
        style={styles.studentDetails}
        
      />
    </View>
  )
}

export default UserData

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
  studentDetails:{
    //borderColor: "black",
    //borderWidth: 5,
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
    fontSize: 25,
    //fontWeight: 350,
  },
  courseDescription: {
    //borderColor: "yellow",
    //borderWidth: 5,
    //borderRadius: 10,
    marginVertical: 15,
    fontSize: 20,
    //fontWeight: 300,
    marginHorizontal:10
  },
  ButtonContener:{
    //borderColor: "black",
    //borderWidth: 5,
    marginBottom:15
  },
  
  ButtonText:{
    paddingHorizontal:10,
    fontSize: 28,
    //fontWeight: 500,
    color:"white",
    backgroundColor:"black",
    borderRadius: 10,

  }
})