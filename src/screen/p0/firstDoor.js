import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Authenticator} from 'aws-amplify-react-native';
const Door = () => {
  const [state, setState] = useState('');
  const navigation = useNavigation();
  console.log(state);
  if (state === 'signedIn') {
    navigation.navigate('Pass');
  }
  if (state === '') {
    navigation.navigate('Login', {
      state,
    });
  }

  return (
    <View style={{width: 1, height: 1}}>
      <Authenticator
        hideDefault={true}
        onStateChange={(AuthState) => setState(AuthState)}></Authenticator>
    </View>
  );
};

export default Door;
