import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Auth} from 'aws-amplify';

import styles from './styles';

const SignUp = (props) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [Email, onChangeEmail] = React.useState('');

  let input1 = username.replace(/\s+/g, ',');
  let input2 = password.replace(/\s+/g, '');
  let input3 = Email.replace(/\s+/g, '');

  console.log(input2, input1, input3);

  if (props.authState === 'signUp')
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Crear una cuenta</Text>
        <Text style={styles.icon1}>
          <Icon name="person-outline" size={15} color="#000" />
        </Text>
        <TextInput
          style={styles.input1}
          value={username}
          onChangeText={onChangeUsername}
          placeholder="nombre de usuario"
        />
        <Text style={styles.icon2}>
          <Icon name="ios-eye-off-outline" size={15} color="#000" />
        </Text>
        <TextInput
          style={styles.input2}
          value={password}
          onChangeText={onChangePassword}
          placeholder="contraseña"
        />

        <Text style={styles.info3}>asegurate de recordar tu contraseña</Text>
        <Text style={styles.icon2}>
          <Icon name="pencil-outline" size={15} color="#000" />
        </Text>
        <TextInput
          style={styles.input2}
          value={Email}
          onChangeText={onChangeEmail}
          placeholder="Email"
        />
        <Text style={styles.info3}>
          el codigo de verificacion sera enviado a este correo asegurate de
          ingresar un correo valido
        </Text>
        <TouchableOpacity style={styles.press2}>
          <Text style={styles.info2}>crear cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomLinkLeft}
          onPress={() => props.onStateChange('confirmSignUp', {})}>
          <Text style={styles.info1}>confirma codigo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomLinkRight}
          onPress={() => props.onStateChange('signIn', {})}>
          <Text style={styles.info1}>atras</Text>
        </TouchableOpacity>
      </View>
    );
  else return <></>;
};

export default SignUp;