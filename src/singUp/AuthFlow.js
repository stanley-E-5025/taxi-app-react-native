import React from 'react';
import {
  Authenticator,
  ForgotPassword,
  ConfirmSignIn,
} from 'aws-amplify-react-native';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ConfirmSignUp from './components/ConfirmSignUp';

const AuthFlow = () => {
  return (
    <>
      <Authenticator hideDefault={true}>
        <SignIn />
        <SignUp />
        <ConfirmSignUp />
        <ConfirmSignIn />
        <ForgotPassword />
      </Authenticator>
    </>
  );
};

export default AuthFlow;
