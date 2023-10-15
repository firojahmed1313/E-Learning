import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Nav = () => {
    const Navigation= useNavigation();
  return (
    <View style={styles.ButtonContener}>
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={()=> Navigation.navigate("Course")}
      >
        <Image 
            style={styles.ButtonImage}
            source={{
              uri:"https://img.icons8.com/3d-fluency/94/training.png"
            }}
        />

        
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={()=> Navigation.navigate("About")}
      >
        <Image 
            style={styles.ButtonImage}
            source={{
              uri:"https://img.icons8.com/3d-fluency/94/info.png"
            }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={()=> Navigation.navigate("UserData")}
      >
        <Image 
            style={styles.ButtonImage}
            source={{
              uri:"https://img.icons8.com/3d-fluency/94/conference-call--v1.png"
            }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={()=> Navigation.navigate("Contact")}
      >
        <Image 
            style={styles.ButtonImage}
            source={{
              uri:"https://img.icons8.com/color/96/contact-card.png"
            }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Nav

const styles = StyleSheet.create({
    ButtonContener:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    ButtonStyle:{
        width:"auto",
        paddingHorizontal:10,
        paddingVertical:5,
        textAlign:"center",
        fontWeight:500,
    },
    
    ButtonImage:{
      width:"100%",
      height:60,
      aspectRatio:1,
    }
})