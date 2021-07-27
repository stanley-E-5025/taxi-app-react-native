import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import styles from './styles';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {listCarInfos} from '../../graphql/queries';

import {onCreateCarInfo} from '../../graphql/subscriptions';

const P5 = () => {
  const [uer, setUser] = useState('');

  const [drivers, setDrivers] = useState([]);
  console.log(uer);
  console.log(drivers);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        const email = userInfo.username;
        setUser(email);
      } catch (e) {
        console.error(e);
      }
    };

    API.graphql(graphqlOperation(onCreateCarInfo)).subscribe({
      next: () => {
        getcars();
      },
    });
    getUser();
  }, []);

  const getcars = async () => {
    try {
      const carData = await API.graphql(
        graphqlOperation(listCarInfos, {
          filter: {userId: {eq: uer}, status: {eq: 'NEW'}},
        }),
      );

      setDrivers(carData.data.listCarInfos.items);
    } catch (e) {
      console.error(e);
    }
  };

  API.graphql(graphqlOperation(onCreateCarInfo)).subscribe({
    next: () => {
      getcars();
    },
  });

  const route = useRoute();
  const navigate = useNavigation();

  const latA = route.params.origins.latitude;
  const lonA = route.params.origins.longitude;
  const latB = route.params.destination.latitude;
  const lonB = route.params.destination.longitude;
  const cost = route.params.orderPrice;
  const orden = {latA, lonA, latB, lonB, D};
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
      </View>
      <View style={styles.view}>
        <Text style={styles.Text}>buscando conductorr !!! </Text>
      </View>
    </View>
  );
};

export default P5;
