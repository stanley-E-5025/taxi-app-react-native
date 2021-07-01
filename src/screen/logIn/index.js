import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/core';

import SignIn from './SignIn';

const Login = () => {
  const route = useRoute();

  if (route.params.satate === 'signedIn') return <></>;
  else return <SignIn />;
};

export default Login;
