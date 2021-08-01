import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {listOrders} from '../../graphql/queries';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRoute, useNavigation} from '@react-navigation/core';

const List = () => {
  const [all, setAll] = useState([]);
  const [email, setEmail] = useState('all');

  const navigation = useNavigation();

  const order = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const email = userInfo.username;
      setEmail(email);
    } catch (e) {}
  };
  const fetchOrders = async () => {
    try {
      const orderData = await API.graphql(
        graphqlOperation(listOrders, {filter: {type: {eq: email}}}),
      );
      const info = orderData.data.listOrders.items;
      setAll(info);
    } catch (e) {}
  };

  const Item = ({price, place}) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.price}>
        <Text style={{fontWeight: 'bold'}}>{price} NIO</Text>
      </View>
      <View style={styles.title}>
        <Text>{place}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => (
    <Item
      title={item.nota}
      price={item.cost}
      place={item.place}
      duration={item.duration}
      distance={item.distance}
    />
  );

  useEffect(() => {
    order();
  });
  useEffect(() => {
    fetchOrders();
  });

  return (
    <SafeAreaView>
      <Pressable style={styles.item2} onPress={() => navigation.navigate('P1')}>
        <Text style={styles.history}>
          <Icon name="chevron-left" size={20} color="#000" /> {'  '} regresar
        </Text>
      </Pressable>
      <FlatList
        data={all}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: '100%',
    height: 100,
    margin: 1,
  },
  item2: {
    width: '100%',
    height: 60,
  },
  title: {
    color: '#000000',
  },
  title2: {
    fontWeight: 'bold',
  },

  price: {
    width: 100,
    height: 30,

    bottom: 0,
    right: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: 250,
    height: 60,

    bottom: 20,
    left: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  history: {
    color: '#171717',
    textAlign: 'center',
    fontSize: 25,
    position: 'absolute',
    top: 10,
    left: 10,
    fontWeight: 'bold',
  },
});

export default List;
