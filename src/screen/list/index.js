import React, {useState, useEffect} from 'react';
import {View, Pressable, SafeAreaView, Text} from 'react-native';
import styles from './styles';
const List = () => {
  return (
    <SafeAreaView style={styles.view}>
      <Pressable style={styles.view2}>
        <Text style={{color: '#ffffff'}}>histoiral</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default List;
