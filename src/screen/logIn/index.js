import React from 'react';
import {View, TextInput, Pressable, Text} from 'react-native';
import {
  Authenticator,
  ForgotPassword,
  ConfirmSignUp,
} from 'aws-amplify-react-native';
import SignIn from './SignIn';
import SignUp from './SingUp';
import ConfirmSignIn from './ConfirmSignIn';
import Pass from './door';

const Login = () => {
  return (
    <Authenticator
      hideDefault={true}
      authState="signIn"
      onStateChange={(AuthState) => console.log(AuthState)}>
      <SignUp />
      <SignIn />
      <ConfirmSignUp />

      <ConfirmSignIn />
      <ForgotPassword />
    </Authenticator>
  );
};

export default Login;
