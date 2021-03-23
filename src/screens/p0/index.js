import React from 'react';
import { Text, View, ImageBackground , Pressable} from 'react-native';
import { useNavigation} from '@react-navigation/native'
 

const p0= () => {
  
  const   navigation = useNavigation ();
  const move =( ) => 
  {
    navigation.navigate('home')
  } 
  
  
  return (
    
    <View    >
    <ImageBackground source= {require("./gd.jpg" )}  style={{ height:1000 ,
    justifyContent: "center" , width:500 , alignSelf:"center"}}>
    <View style={{alignSelf:"center" , justifyContent:"center"}}>
    <Pressable onPress={move} style={{height:40, width:200 , backgroundColor:"#033683", borderRadius:20  , justifyContent:"center"}}>
        <Text style={{alignSelf:"center" , justifyContent:"center", color:"#ffffff" , fontWeight:"bold"}}>comenzemos </Text>
      </Pressable>
    </View>
    </ImageBackground>
  </View>
 

 
   
  );
}

export default p0; 



