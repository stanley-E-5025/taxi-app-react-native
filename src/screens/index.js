import React from 'react';
import { Text, View , Pressable,Alert } from 'react-native';
import MapView from 'react-native-maps';


const  Home = () => {
  return (
    <View style={{ flex: 1,   alignItems: "center" , backgroundColor:"#838383" }}>
     <MapView style={{  width:500
     ,height:1000 }}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  
  
   <Pressable onPress={() => Alert.alert('Simple Button pressed')}
   
   style={{backgroundColor:"#505050" ,  position:"absolute" ,  width:250 , height:  50, borderRadius: 70, marginTop: 700
   }} >
    <Text style={{ textAlign:"center" , marginTop:13, color:"#ffffff" , fontSize: 20 , fontWeight:"bold" }}>were</Text>
</Pressable>
    </View>
  );
}

export default  Home;