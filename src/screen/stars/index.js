import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
  Pressable,
  BackHandler,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/core';
import {API, graphqlOperation} from 'aws-amplify';
import {updateCarInfo, updateOrder} from '../../graphql/mutations';

import styles from './styles';

const Stars = () => {
  const [defaut, setDefault] = useState(2);
  const [stars, setStars] = useState([1, 2, 3, 4, 5]);
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'Stars') {
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
  console.log(route.name);

  const fullImage =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const halfImage =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  const RatigBar = () => {
    return (
      <View style={styles.container}>
        {stars.map((item, key) => {
          return (
            <TouchableOpacity key={item} onPress={() => setDefault(item)}>
              <Image
                style={styles.icon}
                source={
                  item <= defaut
                    ? {
                        uri: fullImage,
                      }
                    : {uri: halfImage}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const Calificar = () => {
    try {
      const input = {
        id: route.params.carId,
        duration: defaut,
      };

      const response = API.graphql(
        graphqlOperation(updateCarInfo, {
          input,
        }),
      );
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <SafeAreaView>
      {route.params.state === 'updated' && (
        <View style={styles.drawer}>
          <RatigBar />
          <Text>{defaut + '/' + stars.length}</Text>

          <Pressable
            style={styles.presable}
            onPress={Calificar}
            onPressOut={() => navigation.navigate('P1')}>
            <Text style={styles.txt}>Calificar</Text>
          </Pressable>
        </View>
      )}

      {route.params.state === 'rejected' && (
        <view style={styles.drawer}>
          <Text> Lo sentimos , tu orden fue rechazada :'( </Text>
        </view>
      )}
    </SafeAreaView>
  );
};

export default Stars;
