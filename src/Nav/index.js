import 'react-native-gesture-handler';
import  React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Home from '../screens/index'
import P2 from '../screens/p2/index'
import { createStackNavigator } from '@react-navigation/stack';
import P3 from '../screens/p3';

const Stack = createStackNavigator();


export default function Nav() {
  return (
    <NavigationContainer> 
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
          
        }}
        initialRouteName={"home"}
        >
          <Stack.Screen name={"home"} component={Home} />
          <Stack.Screen name={"p2"} component={ P2} />
          <Stack.Screen name={"p3"} component={ P3} />
          
        </Stack.Navigator>
        </NavigationContainer>
  );
}