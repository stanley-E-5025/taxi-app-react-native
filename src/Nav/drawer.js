import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import P from '../screen/P/index';
import P0 from '../screen/p0/index';
import P1 from '../screen/p1/index';
import P2 from '../screen/p2/index';
import P3 from '../screen/p3/index';
import P4 from '../screen/p4/index';
import P5 from '../screen/p5/index';
import P6 from '../screen/P6/index';
import La from './index';
import P7 from '../screen/P7';
const Stack = createStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'P0'} component={P0} />
        <Stack.Screen name={'P'} component={P} />
        <Stack.Screen name={'P1'} component={P1} />
        <Stack.Screen name={'P2'} component={P2} />
        <Stack.Screen name={'P3'} component={P3} />
        <Stack.Screen name={'P4'} component={P4} />
        <Stack.Screen name={'P5'} component={P5} />
        <Stack.Screen name={'P6'} component={P6} />
        <Stack.Screen name={'P7'} component={P7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
