import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Auth} from 'aws-amplify';
import styles from './styles';

const CustomDrawer = ({navigation, props}) => {
  const historial = () => {
    navigation.navigate('List');
  };
  const contactanos = () => {
    navigation.navigate('contact');
  };
  const [userInfo, setUserinfo] = useState('...');
  const [email, setEmail] = useState('...');

  const order = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      console.log(userInfo);
      const name = userInfo.username;
      const email = userInfo.attributes.email;
      setEmail(email);
      setUserinfo(name);
    } catch (e) {
      console.error(e);
    }
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
        <Pressable style={styles.history} onPress={historial}>
          <Text style={{marginLeft: 10, color: '#ffffff'}}>historial</Text>
        </Pressable>
        <Pressable style={styles.constacto} onPress={contactanos}>
          <Text style={{marginLeft: 10, color: '#ffffff'}}>contactanos</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
