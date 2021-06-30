import React, {useCallback, useState, useEffect} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
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
  const move = () => {
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
        <Pressable style={styles.history} onPress={movet}>
          <Text style={{marginLeft: 10, color: '#ffffff'}}>historial</Text>
        </Pressable>
        <Pressable style={styles.constacto} onPress={move}>
          <Text style={{marginLeft: 10, color: '#ffffff'}}>contactanos</Text>
        </Pressable>

        <LottieView
          source={require('../animations/FFFF.json')}
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
