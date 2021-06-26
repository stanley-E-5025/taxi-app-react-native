import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';
import {listOrders} from '../../graphql/queries';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import LottieView from 'lottie-react-native';

const List = () => {
  const [all, setAll] = useState([]);
  const [email, setEmail] = useState('all');

  const order = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const name = userInfo.attributes.sub;
      const email = userInfo.username;
      setEmail(email);
    } catch (e) {
      console.error(e);
    }
  };
  const fetchOrders = async () => {
    try {
      const orderData = await API.graphql(
        graphqlOperation(listOrders, {filter: {type: {eq: email}}}),
      );
      const info = orderData.data.listOrders.items;
      setAll(info);
    } catch (e) {
      console.error(e);
    }
  };

  const Item = ({title, price, place, distance, duration, final}) => (
    <View style={styles.item}>
      <Text style={styles.title}>nota :{title}</Text>
      <Text style={styles.title}>{price}C$</Text>
      <Text style={styles.title}>{distance}km</Text>
      <Text style={styles.title}>{duration}min</Text>
      <Text style={styles.title}>{place}</Text>
      <Text style={styles.title2}>finalizado</Text>
    </View>
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

  return (
    <SafeAreaView>
      <View style={styles.item2}>
        <LottieView
          source={require('../../animations/6607-loading-drop (1).json')}
          autoPlay={true}
          loop={false}
          speed={10}
          onAnimationFinish={order}
          style={{
            height: 1,
            width: 1,
            alignSelf: 'center',
            marginTop: 50,
          }}
        />

        <LottieView
          source={require('../../animations/6607-loading-drop (1).json')}
          autoPlay={true}
          loop={false}
          speed={5}
          onAnimationFinish={fetchOrders}
          style={{
            height: 1,
            width: 1,
            alignSelf: 'center',
            marginTop: 50,
          }}
        />

        <Text
          style={{
            color: '#171717',
            textAlign: 'center',
            fontSize: 25,
            position: 'absolute',
            top: 10,
            left: 10,
          }}>
          historial
        </Text>
      </View>
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
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  item2: {
    width: '100%',
    height: 50,
  },
  title: {
    color: '#000000',
  },
  title2: {
    fontWeight: 'bold',
  },
});

export default List;
