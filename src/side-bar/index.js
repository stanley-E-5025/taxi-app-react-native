import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import P1 from '../screen/p1/index';
import P2 from '../screen/p2/index';
import P3 from '../screen/p3/index';
import P4 from '../screen/p4/index';
const Stack = createStackNavigator();

export default function Screens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'P1'} component={P1} />
      <Stack.Screen name={'P2'} component={P2} />
      <Stack.Screen name={'P3'} component={P3} />
      <Stack.Screen name={'P4'} component={P4} />
    </Stack.Navigator>
  );
}
