
import { StyleSheet, Text, TextInput, View,ScrollView ,TouchableOpacity} from 'react-native'
import React from 'react'

const Contact = () => {
  return (
    <ScrollView style={styles.conComponent}>
      <Text style={styles.mainText}>Contact Me  </Text>
      <View style={styles.mainForm}> 
        <View style={styles.formitems}>
          <Text  style={styles.formLevel}>Enter Your Name :</Text>
          <TextInput 
             style={styles.fromInput}
            placeholder='your name'
            onChange={()=>{}}
            defaultValue=''
          />
        </View>
        <View style={styles.formitems}>
          <Text  style={styles.formLevel}>Enter Email :</Text>
          <TextInput 
             style={styles.fromInput}
            placeholder='your email'
            onChange={()=>{}}
            defaultValue=''
          />
        </View>
        <View style={styles.formitems}>
          <Text  style={styles.formLevel}>Enter quary :</Text>
          <TextInput 
             style={[styles.fromInput,{
              height:160,
              
             }]}
            placeholder='Write your quary and others'
            onChange={()=>{}}
            defaultValue=''
          />
        </View>
      </View>
      <View style={styles.ButtonContener}>
        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() =>{} }
        >
          <Text style={styles.ButtonText}>SEND</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Contact

const styles = StyleSheet.create({
  conComponent:{
    //borderColor: "red",
    //borderWidth: 5,
    borderRadius: 10,
    height:"auto",
    width:"90%",
    marginVertical:10,
    marginHorizontal:"5%",
    display:"flex",
    //justifyContent:"center",
    //alignItems:"center",
    shadowColor: '#171717',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  mainText:{
    //borderColor: "yellow",
    //borderWidth: 5,
    //borderRadius: 10,
    fontSize:32,
    //fontWeight:500,
    marginVertical:20,
    textAlign:"center",
  },
  mainForm:{
    //borderColor: "blue",
    //borderWidth: 5,
    borderRadius: 10,
    width:"90%",
    marginVertical:10,
    marginHorizontal:"5%",
    shadowColor: '#171717',
    shadowOffset: {width: 4, height: -4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  formitems:{
    //borderColor: "green",
    //borderWidth: 5,
    //borderRadius: 10,
    width:"90%",
    marginVertical:10,
    marginHorizontal:"5%",
  },
  formLevel:{
    //borderColor: "pink",
    //borderWidth: 5,
    //borderRadius: 10,
    fontSize:22,
    marginBottom:15
  },
  fromInput:{
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10,
    height:40
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
})