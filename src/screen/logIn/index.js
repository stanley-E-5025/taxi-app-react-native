import React from 'react';
import {View, TextInput, Pressable, Text} from 'react-native';
import {
  Authenticator,
  SignIn,
  ForgotPassword,
  ConfirmSignUp,
  ConfirmSignIn,
} from 'aws-amplify-react-native';
import SignUp from './SingUp';
import Pass from './door';

const Login = () => {
  function Test(props) {
    if (props.authState === 'signedIn') return <Pass></Pass>;
    else return <></>;
  }
  return (
    <Authenticator
      hideDefault={true}
      authState="signIn"
      onStateChange={(AuthState) => console.log(AuthState)}>
      <Test />
      <SignUp />
      <SignIn />
      <ConfirmSignUp />

      <ConfirmSignIn />
      <ForgotPassword />
    </Authenticator>
  );
};

export default Login;
