import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
 view1:{
backgroundColor:"#cccccc",
   height:150,
   width:200,
   alignSelf:"center",
   marginTop:50,
   borderRadius:20,
   alignItems:"center",
   justifyContent:"center"
      
    
     
    
  },

 info:{
   
    width:300, 
    height:50 , 
    alignSelf:"center",
    borderColor:"#ffffff",
    marginTop:20
    
    
 },
    
 Text:{
     
   color:"#FFFFFF",
   fontWeight:"bold"

    

 },


    view2:{
       backgroundColor:"#cccccc", 
       width:350, 
       height:100,
       alignSelf:"center",

       marginTop:100 ,
       borderRadius:20,
       

    },


    presable:{

      width:150,
      height:50,
      backgroundColor:"#033683", 
      alignSelf:"center", 
      marginTop:10,
      borderRadius:20,
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"center"
    },

    
     
   presablecont:{
 height:50,
 width:350,
 
 flexDirection:"row",
 justifyContent:"space-between"

   },



presable2:{
marginTop:30

}



});


export default styles;