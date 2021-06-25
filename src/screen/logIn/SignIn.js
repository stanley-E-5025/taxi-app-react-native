import React from 'react';
import {View, Pressable, Text, TextInput, Image} from 'react-native';
import {Auth} from 'aws-amplify';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './stylesSingup';

export default function SignIn(props) {
  const [name, setName] = React.useState('');
  const [code, setCode] = React.useState();

  var rep = name.replace(/\s/g, '');
  async function signUp() {
    try {
      const user = await Auth.signIn(rep, code);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  if (props.authState === 'signIn')
    return (
      <View style={styles.view}>
        <View style={styles.title}>
          <Image
            style={styles.img}
            source={require('../../animations/11.png')}
          />
        </View>

        <Text style={styles.infotext}>
          <Icon name="account-edit-outline" size={25} color="#000000" />
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder={'nombre de usuario'}
        />
        <Text style={styles.infotext}>
          <Icon name="account-key-outline" size={25} color="#000000" />
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setCode}
          value={code}
          placeholder={'contraseña'}
        />

        <Pressable onPress={signUp} style={styles.bt}>
          <Text style={{color: '#000000'}}>iniciar sesion</Text>
        </Pressable>

        <Pressable
          style={styles.presable}
          onPress={() => props.onStateChange('signUp')}>
          <Text> crear cuenta</Text>
        </Pressable>
      </View>
    );
  else return <></>;
}
