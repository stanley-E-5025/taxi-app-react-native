import 'react-native-gesture-handler';
import  React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Home from '../home/index';
import P2 from '../screens/p2/index';
import { createStackNavigator } from '@react-navigation/stack';
import P3 from '../screens/p3';
import p0 from '../screens/p0';
import p4 from '../screens/p4/index';
const Stack = createStackNavigator();


export default function AllScreens() {
  return (
 
        <Stack.Navigator  
        screenOptions={{
          headerShown: false, 
        }}
        initialRouteName={"home"}
        >
          <Stack.Screen name={"home"} component={Home} />
          <Stack.Screen name={"p2"} component={P2} />
          <Stack.Screen name={"p3"} component={P3} />
          <Stack.Screen name={"p4"} component={p4} />
          <Stack.Screen name={"p0"} component={p0} />
          
        </Stack.Navigator>
     
  );
}