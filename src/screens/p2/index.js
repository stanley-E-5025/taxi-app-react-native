import React from 'react';
import { Text, View ,TextInput, SafeAreaView , Pressable  , Alert} from 'react-native';
import { useNavigation} from '@react-navigation/native'





const P2 = () => {
 
    const   navigation = useNavigation ();

    const move =( ) => {
      navigation.navigate('p3')
    } 
 

  return (
      <View  >


          

<TextInput 

style=
{{
    backgroundColor:"#C4C4C4",
    margin: 10 , 
    padding: 6, 
    borderRadius : 10 ,
    marginTop: 50
}}
 
placeholder="aqui"/>

<TextInput 
         
style=
{{
    backgroundColor:"#C4C4C4",
    margin: 10 , 
    padding: 6, 
    borderRadius : 10 ,
}}
         
placeholder="donde?"  />





<Pressable  onPress={ 
  move
}

style=
{{
backgroundColor:"#939393" ,
width:200 ,
height:  40,
borderRadius: 70,
alignItems:"center" ,
alignSelf:"center" ,
marginTop: 100 
}}>
   
<Text 
style=
{{
marginTop: 10 ,
color:"#ffffff" ,
fontWeight:"bold" 
}}


>listo </Text>
 </Pressable>



      </View>
        
   
  );
}

export default  P2;