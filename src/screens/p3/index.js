import React, { useState ,useEffect} from 'react';
import { Text, View ,  Pressable,  ImageBackground ,SafeAreaView} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation , useRoute} from '@react-navigation/native';
   


  
const P3 = () => {

  const routen = useRoute();
   
   
  
  const navigation = useNavigation ();
  const move =( ) => 
  {
    navigation.navigate('home')
  } 


  const movet =( ) => 
  {
    navigation.navigate('p2')
  } 
   

  return (
   
   <SafeAreaView>
      <ImageBackground   source={require('./ggg.jpg')} style={{resizeMode: "cover",
       justifyContent: "center"}} >
    <Pressable style={styles.presable2} onPress={move} ><Text>   <Icon name="angle-left" size={50} color="#333333"  /></Text></Pressable>
      
       <View style={styles.view1}><Text style={{color:"#ffffff" , fontWeight:"bold" , fontSize:15}}> <Icon name="coins" size={20} color="#ffffff" />       80    </Text></View>


      <View style={styles.info}><Text> <Icon name="angle-right" size={30} color="#000000"  /> descripcion acerca del veiculo </Text></View>
      
      <View>
      <Pressable style={styles.presable}onPress={movet} >
      <Icon name="angle-right" size={25} color="#ffffff" />  
        <Text style={styles.Text}> continuar </Text>
      </Pressable>
      </View>
   
    </ImageBackground>
     
   </SafeAreaView>
     
  );
}

export default P3;