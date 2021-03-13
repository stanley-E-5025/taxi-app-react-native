import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    pressable: {
          
        padding:5  , 
        borderRadius: 10 ,
        width:70,
        height:70,
        justifyContent:'center',
         
        alignSelf:"center"
      },
       
    
      text:{
        color:"#ffffff" , 
        fontWeight:"bold" , 
        fontSize:15 , 
        textAlign:"center" 
      },

      view: {
        height:450, margin:10, borderRadius: 20 ,   
      }
     
});


export default styles;