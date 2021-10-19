import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Bt = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[styles.main, {top: 20, left: 10}]}>
      <TouchableOpacity onPress={navigation.openDrawer} style={styles.mainCont}>
        <Text>
          <Icon name="ellipsis-vertical-outline" size={20} color="#000" />
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Bt;
