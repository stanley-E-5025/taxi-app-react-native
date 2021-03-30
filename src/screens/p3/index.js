import React from 'react';
import { Text, View , Image , Pressable, SafeAreaView , ImageBackground} from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation , useRoute} from '@react-navigation/native'
   


  
const P3 = () => {
const route = useRoute();
const   navigation = useNavigation ();
const move =( ) => {navigation.navigate('home')} 
const movet =( ) => {navigation.navigate('p2') 
console.log("seleccionado")} 
   

  return (
 
 <SafeAreaView>



<Pressable style={styles.view1} onPress={move}><Icon name="arrow-left" size={20} color="#ffffff"  /></Pressable>


<Pressable style={styles.view2}><Text style={styles.Text}> <Icon name="car" size={20} color="#000000"  />    seliciona un veiculo</Text></Pressable>


<Pressable style={styles.presable2} onPress={movet}><View style={styles.info}><Icon name="taxi" size={25} color="#000000"  /></View><Text style={styles.text2}>taxi regular             <Icon name="circle" size={20} color="#000000"  />  90 C$  </Text></Pressable>


 
 </SafeAreaView>
  

 


 
     
  );
}

export default P3;