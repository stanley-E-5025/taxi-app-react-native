import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
   map:{
    
       width:"100%",
       height:"100%"
   },


   view:{
     width:"100%", 
     height:"100%",
     backgroundColor:"#000000" ,
     alignItems:"center",
     
     
   },
    presable:{
        
     
    backgroundColor:"#033683" , 
    
     width:250 ,
      height:  50,
       borderRadius: 70,
        marginTop: 700,
        justifyContent:'center'
    },


    text:{textAlign:"center" ,
   
     color:"#ffffff" , 
     fontSize: 20 ,
      fontWeight:"bold"},


      viev2:{

        position:'absolute', 
        alignSelf:"center"

    

      },


       menu:{
           height:30,
           width:60,
           
           position:"absolute",
           borderRadius:10,
           margin:20
       }
});


export default styles;