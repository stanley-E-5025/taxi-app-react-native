import React, {useState} from 'react';
import {View, Pressable, Text, TextInput, Image} from 'react-native';
import {Auth} from 'aws-amplify';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './stylesSingup';

export default function SignUp(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [pastword, setPasword] = React.useState('');
  console.log(name, email, number, pastword);
  if (props.authState === 'signUp')
    return (
      <View style={styles.view}>
        <View style={styles.title}>
          <Image
            style={styles.img}
            source={require('../../animations/11.png')}
          />
        </View>
        <Text style={styles.infotext}>
          {' '}
          <Icon name="account-multiple-outline" size={25} color="#000000" />
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder={'nombre'}
        />
        <Text style={styles.infotext}>
          {' '}
          <Icon name="account-key-outline" size={25} color="#000000" />
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPasword}
          value={pastword}
          placeholder={'contraseña'}
        />
        <Text style={styles.infotext}>
          {' '}
          <Icon name="account-edit-outline" size={25} color="#000000" />
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder={'email'}
        />
        <View style={styles.numberinputview}>
          <View style={styles.numberview}>
            <Text style={styles.number}>+505</Text>
          </View>
          <TextInput
            style={styles.numberinput}
            onChangeText={setNumber}
            value={number}
            placeholder={'numero'}
          />
        </View>
        <Pressable style={styles.bt}>
          <Text style={{color: '#000000'}}>crear cuenta</Text>
        </Pressable>
        <View style={styles.bottom}>
          <Pressable
            style={styles.presable}
            onPress={() => props.onStateChange('signIn')}>
            <Text>atras</Text>
          </Pressable>
          <Pressable
            style={styles.presable}
            onPress={() => props.onStateChange('confirmSignUp')}>
            <Text style={styles.bottomtext}>confirmar codigo</Text>
          </Pressable>
        </View>
      </View>
    );
  else return <></>;
}
