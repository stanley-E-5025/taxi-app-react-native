import React, {useCallback, useState, useEffect} from 'react';
import {View, Text, Pressable, Linking, Button, Alert} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const CustomDrawer = ({navigation, props}) => {
  const movet = () => {
    navigation.navigate('List');
  };
  const [userInfo, setUserinfo] = useState('all');
  const [email, setEmail] = useState('all');

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

  return (
    <DrawerContentScrollView {...props} style={styles.view}>
      <View style={styles.view}>
        <View style={styles.user}>
          <Text style={styles.text}>
            <Icon name="user" size={25} color="#ffffff" />
          </Text>
        </View>

        <View>
          <Text style={styles.text}>{userInfo}</Text>
          <Text style={styles.textn}>{email}</Text>
        </View>

        <Pressable style={styles.history} onPress={movet}>
          <Text style={{fontWeight: 'bold', marginLeft: 10, color: '#383838'}}>
            histoiral
          </Text>
        </Pressable>
        <View style={[styles.viewsocial, {bottom: 10}]}>
          <Pressable
            style={styles.pres}
            onPress={() =>
              Linking.openURL('https://www.facebook.com/taxislosprimos/')
            }>
            <Text>
              <Icon name="social-facebook" size={30} color="#000000" />
            </Text>
          </Pressable>
          <Pressable
            onPress={() =>
              Linking.openURL(
                'https://www.instagram.com/taxis_losprimos_mga/?hl=es-la',
              )
            }>
            <Text>
              <Icon name="social-instagram" size={30} color="#000000" />
            </Text>
          </Pressable>
        </View>
        <LottieView
          source={require('../animations/4822-icon-test.json')}
          autoPlay={true}
          loop={false}
          style={{height: 1, width: 1}}
          speed={10}
          onAnimationFinish={order}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
