import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Authenticator} from 'aws-amplify-react-native';
const Door = () => {
  const [state, setState] = useState('');
  const navigation = useNavigation();

  if (state === 'signedIn') {
    navigation.navigate('Pass');
  } else if (state === 'signIn') {
    navigation.navigate('Login');
  }
  return (
    <View style={{width: 1, height: 1}}>
      <Authenticator
        hideDefault={true}
        authState="signIn"
        onStateChange={(AuthState) => setState(AuthState)}></Authenticator>
    </View>
  );
};

export default Door;
