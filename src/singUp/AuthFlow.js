import React from 'react';
import {Text, View} from 'react-native';
import {Authenticator} from 'aws-amplify-react-native';

const AuthFlow = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Authenticator></Authenticator>
    </View>
  );
};

export default AuthFlow;
