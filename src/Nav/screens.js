import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import P0 from '../screen/p0/index';
import P1 from '../screen/p1/index';
import P2 from '../screen/p2/index';
import P3 from '../screen/p3/index';
import P4 from '../screen/p4/index';
import P5 from '../screen/p5/index';
import P6 from '../screen/P6/index';
import P7 from '../screen/P7';
import P8 from '../screen/P8/index';
import List from '../screen/list/index';
import contact from '../screen/contact/index';
import Login from '../screen/logIn/index';
import P44 from '../screen/p44/P44';
import Pass from '../screen/logIn/door';
import Door from '../screen/p0/firstDoor';
import SingUp from '../screen/logIn/SingUp';
import ConfirmSignIn from '../screen/logIn/ConfirmSignIn';

import SignIn from '../screen/logIn/SignIn';
const Stack = createStackNavigator();

export default function screens(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'P0'} component={P0} />
      <Stack.Screen name={'P1'} component={P1} />
      <Stack.Screen name={'P2'} component={P2} />
      <Stack.Screen name={'P3'} component={P3} />
      <Stack.Screen name={'P4'} component={P4} />
      <Stack.Screen name={'P5'} component={P5} />
      <Stack.Screen name={'P6'} component={P6} />
      <Stack.Screen name={'P7'} component={P7} />
      <Stack.Screen name={'P8'} component={P8} />
      <Stack.Screen name={'P44'} component={P44} />

      <Stack.Screen name={'List'} component={List} />
      <Stack.Screen name={'contact'} component={contact} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Pass'} component={Pass} />
      <Stack.Screen name={'Door'} component={Door} />
      <Stack.Screen name={'SingUp'} component={SingUp} />
      <Stack.Screen name={'SingIn'} component={SignIn} />
      <Stack.Screen name={'ConfirmSignIn'} component={ConfirmSignIn} />
    </Stack.Navigator>
  );
}
