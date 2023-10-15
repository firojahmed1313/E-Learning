import { StyleSheet, Text, View, Image ,ScrollView} from "react-native";
import React from "react";
import Nav from "../component/Nav";
import DefaultImage from "../../assets/home.jpg";
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

const Home = () => {
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  ";

  return (
    <ScrollView style={styles.mainCom}>
      <View style={styles.topHeader}>
        <Image source={{ uri: DEFAULT_IMAGE }} style={styles.headerImage} />
        <Text style={styles.headerText}>Welcome To</Text>
        <Text style={styles.headerText}>E-Learning</Text>
        <Text style={styles.headerDescription}>{description}</Text>

      </View>
      <View style={styles.navStyle} >
        <Nav/>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainCon: {
    height:"auto",
    //borderColor: "red",
    width:"100%",
    //borderWidth:5,
    display: "flex",
    justifyContent:"center",
    textAlign:"center",
    paddingHorizontal:20,
  },
  topHeader: {
    //borderColor: "blue",
    //borderWidth:5,
    display: "flex",
    justifyContent:"center",
    textAlign:"center",
    paddingHorizontal:10,
    marginTop:50

  },
  headerImage: {
    //borderColor: "black",
    borderRadius:10,
    height:undefined,
    width:"100%",
    aspectRatio:1,
    //borderWidth:5,
    
    display:"flex",
    marginBottom:50,
},
  headerText: {
    /*borderColor: "green",
    borderWidth:5,*/
    textAlign:"center",
    fontSize:32,
    textTransform:"uppercase",
    color:"blue",
    marginBottom:10,

  },
  headerDescription: {
    /*borderColor: "pink",
    borderWidth:5,*/
    fontSize:18,
    textTransform:"capitalize",
    marginTop:15
    
  },
  navStyle:{
    backgroundColor:"gray",
    //backgroundColor:"#686868"
    marginTop:20,
    marginBottom:20,
    padding:15,
    borderRadius:15,
    position:"relative",
  }
});
