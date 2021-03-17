import React from 'react';
import { Text, View , Image , Pressable, SafeAreaView} from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation} from '@react-navigation/native'
const P3 = () => {
  const   navigation = useNavigation ();
  const move =( ) => 
  {
    navigation.navigate('p2')
  } 


  const movet =( ) => 
  {
    navigation.navigate('p4')
  } 
   

  return (
 
 <View>
 <Pressable style={styles.presable2} onPress={move} ><Text>   <Icon name="angle-left" size={50} color="#333333"  /></Text></Pressable>
   
   <View style={styles.view1}  >
   

   </View>
   <View style={styles.view2}>

   <View style={styles.info}><Text>   <Icon name="angle-right" size={30} color="#000000"  /> descripcion acerca del veiculo </Text></View>
   
     <View style={styles.presablecont} >
     <Pressable style={styles.presable}  onPress={move}>
     <Icon name="angle-left" size={25} color="#ffffff"  />  
       <Text style={styles.Text}>   back </Text>
       
       

     </Pressable>
     <Pressable style={styles.presable}onPress={movet} >
     <Icon name="angle-right" size={25} color="#ffffff"  />  
       <Text style={styles.Text}>   select</Text>
       
       

     </Pressable>
     </View>
   </View>

 </View>
  

 


 
     
  );
}

export default P3;