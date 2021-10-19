import React, {useState, useEffect, memo} from 'react';
import {View, Text, Pressable, Image, Linking} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';

import {Auth} from 'aws-amplify';
import styles from './styles';

const CustomDrawer = ({navigation, props}) => {
  const [userInfo, setUserinfo] = useState('...');
  const [email, setEmail] = useState('...');
  async function signOut() {
    try {
      await Auth.signOut();

      navigation.navigate('AuthFlow');
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  const order = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      console.log(userInfo);
      const name = userInfo.username;
      const email = userInfo.attributes.email;
      setEmail(email);
      setUserinfo(name);
    } catch (e) {}
  };

  useEffect(() => {
    order();
  });

  return (
    <DrawerContentScrollView {...props} style={styles.view}>
      <View style={styles.view}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.user}>
            <Image
              style={styles.Image}
              source={require('../screen/P6/ICON.png')}
            />
          </View>

          <View style={{alignSelf: 'flex-start', top: 40, left: 30}}>
            <Text style={styles.text}>{userInfo}</Text>
          </View>
        </View>

        <View style={{top: 20}}>
          <Text style={styles.textn}>{email}</Text>
        </View>
        <Pressable style={styles.line}></Pressable>
        <Pressable
          style={styles.history}
          onPress={() => navigation.navigate('List')}>
          <Text style={{marginLeft: 10, color: '#ffffff'}}>Historial</Text>
        </Pressable>
        <Pressable
          style={styles.constacto}
          onPress={() => navigation.navigate('contact')}>
          <Text style={{marginLeft: 10, color: '#ffffff'}}>Contactos</Text>
        </Pressable>
        <Pressable
          style={styles.constacto}
          onPress={() =>
            Linking.openURL('whatsapp://send?text=hello&phone=+505 85088585')
          }>
          <Text style={{marginLeft: 10, color: '#ffffff'}}>Whatsapp</Text>
        </Pressable>

        <Pressable style={styles.constacto} onPress={signOut}>
          <Text style={{marginLeft: 10, color: '#ffffff'}}>
            <Icon name="log-out" size={15} color="#ffff" />
            {'  '}
            Cerrar sesion
          </Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

export default memo(CustomDrawer);
