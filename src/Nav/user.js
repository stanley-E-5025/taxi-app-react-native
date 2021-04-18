import React, {useCallback, useState, useEffect} from 'react';
import {View, Text, Pressable, Linking, Button, Alert} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import styles from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.user}>
        <Text style={styles.text}>
          <Icon name="user" size={25} color="#ffffff" />
        </Text>
      </View>

      <View>
        <Text style={styles.text}>stanley gordon</Text>
        <Text style={styles.textn}>+505 89287688</Text>
      </View>
      <View style={styles.viewsocial}>
        <Pressable style={styles.pres}>
          <Text>
            <Icon name="social-facebook" size={30} color="#000000" />
          </Text>
        </Pressable>
        <Pressable>
          <Text>
            <Icon name="social-instagram" size={30} color="#000000" />
          </Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
