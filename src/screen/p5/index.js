import React, {useState, useEffect} from 'react';
import {Text, View, BackHandler, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {listOrders, listCarInfos} from '../../graphql/queries';

import {onCreateCarInfo} from '../../graphql/subscriptions';
import {updateOrder} from '../../graphql/mutations';

const P5 = () => {
  const [uer, setUser] = useState('');
  const [Orders, setOrders] = useState([]);

  const [drivers, setDrivers] = useState([]);

  const End = async () => {
    try {
      const input = {
        id: Orders[0].id,
        status: 'cancelled',
      };

      const response = await API.graphql(
        graphqlOperation(updateOrder, {
          input,
        }),
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };
  const fetchOrders = async () => {
    try {
      const orderData = await API.graphql(
        graphqlOperation(listOrders, {filter: {status: {eq: 'NEW'}}}),
      );
      setOrders(orderData.data.listOrders.items);
    } catch (e) {
      console.error(e);
    }
  };

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
    fetchOrders();
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
  useEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'P5') {
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [route]),
  );

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

        <LottieView
          source={require('../../animations/loadinf.json')}
          autoPlay={true}
          loop={false}
          style={{height: 0, width: 0}}
          onAnimationFinish={fetchOrders}
        />
      </View>

      <View style={styles.view}>
        <TouchableOpacity
          onPress={End}
          onPressOut={() => navigate.navigate('P1')}
          style={{position: 'absolute', top: 0, alignSelf: 'center'}}>
          <Text style={{fontWeight: 'bold'}}>
            <Icon name="md-log-out-outline" size={25} color="red" />
            {'  '}
            Cancelar Orden
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default P5;
