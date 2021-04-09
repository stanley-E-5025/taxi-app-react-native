import React from 'react';
import {Text, View, Pressable, SafeAreaView} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const P2 = () => {
  const navigation = useNavigation();
  const move = () => {
    navigation.navigate('P1');
  };
  const movet = () => {
    navigation.navigate('P3');
    console.log('seleccionado');
  };

  return (
    <SafeAreaView>
      <Pressable style={styles.view1} onPress={move}>
        <Icon name="arrow-left" size={20} color="#000000" />
      </Pressable>

      <Pressable style={styles.view2}>
        <Text style={styles.Text}>
          <Icon name="edit" size={20} color="#000000" /> seliciona un veiculo
        </Text>
      </Pressable>

      <Pressable style={styles.presable2} onPress={movet}>
        <View style={styles.info}>
          <Icon name="taxi" size={25} color="#000000" />
        </View>
        <Text style={styles.text2}>
          taxi regular <Icon name="money" size={20} color="#000000" /> 90 C${' '}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default P2;
