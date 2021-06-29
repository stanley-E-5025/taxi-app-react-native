import React, {useState, useEffect} from 'react';
import {Text, View, Pressable} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import styles from './styles';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {listCarInfos} from '../../graphql/queries';

import {onCreateCarInfo} from '../../graphql/subscriptions';

const P5 = () => {
  const [uer, setUser] = useState();

  const [drivers, setDrivers] = useState([]);
  const [tonext, setTonext] = useState([]);

  const order = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const name = userInfo.attributes.sub;
      const email = userInfo.username;
      setUser(email);

      console.log(email);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const realTime = API.graphql(graphqlOperation(onCreateCarInfo)).subscribe({
      next: (data) => {
        const UIupdate = data.value.data.onCreateCarInfo;
        setDrivers([UIupdate, ...drivers]);
      },
    });
  }, []);

  const cars = async () => {
    try {
      const carData = await API.graphql(
        graphqlOperation(listCarInfos, {
          filter: {type: {eq: uer}, status: {eq: 'NEW'}},
        }),
      );
      const info = carData.data.listCarInfos.items;
      setDrivers(info);

      console.log(info);
    } catch (e) {
      console.error(e);
    }
  };

  const route = useRoute();
  const navigate = useNavigation();

  const latA = route.params.origins.latitude;
  const lonA = route.params.origins.longitude;
  const latB = route.params.destination.latitude;
  const lonB = route.params.destination.longitude;
  const cost = route.params.orderPrice;
  const orden = {latA, lonA, latB, lonB, D};
  console.log(cost);
  const D = route.params.sin;
  if (drivers.length === 0) {
    console.log('esperar');
  } else {
    navigate.navigate('P6', {
      orden,
      drivers,
      cost,
    });
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}>
      <View style={{position: 'absolute'}}>
        <LottieView
          source={require('../../animations/loadinf.json')}
          autoPlay
          loop
          style={{height: 300, width: 500}}
        />

        <LottieView
          source={require('../../animations/6607-loading-drop (1).json')}
          autoPlay={true}
          loop={false}
          onAnimationFinish={order}
          style={{height: 1, width: 100}}
          speed={0.4}
        />
        <LottieView
          source={require('../../animations/6607-loading-drop (1).json')}
          autoPlay={true}
          loop={false}
          speed={10}
          onAnimationFinish={cars}
          style={{height: 1, width: 100}}
          speed={0.4}
        />
      </View>
      <View style={styles.view}>
        <Text style={styles.Text}>buscando conductorr !!! </Text>
      </View>
    </View>
  );
};

export default P5;
