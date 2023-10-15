import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CourseList from '../component/CourseList'
import Courses from "../api/CourseApi";

const Course = () => {
  const CourseL =({item})=>{
    return(
        <CourseList data={item}/>
    );
  };

return (
    <FlatList
        keyExtractor={(item)=>item.id}
        data={Courses}
        renderItem={CourseL}
    />
    
  )
}

export default Course

const styles = StyleSheet.create({
  mainCom: {
    //borderColor: "red",
    //borderWidth: 5,
    //borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    width: "90%",
    height: "auto",
    marginHorizontal: "5%",
  },
})