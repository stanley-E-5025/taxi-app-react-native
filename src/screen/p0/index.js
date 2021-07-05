import React, {useState} from 'react';
import {View, Image, ImageBackground} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const P0 = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const navigation = useNavigation();
  const move = () => {
    navigation.navigate('P1', {
      lat,
      lon,
    });
  };

  const loc = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lon = event.nativeEvent.coordinate.longitude;
    setLat(lat);
    setLon(lon);
  };
  return (
    <ImageBackground
      source={require('../../animations/bg.jpg')}
      style={styles.image}>
      <View style={styles.view2}>
        <Image
          style={styles.img}
          source={require('../../animations/logo.png')}
        />
      </View>

      <LottieView
        source={require('../../animations/1.json')}
        autoPlay={true}
        loop={false}
        onAnimationFinish={move}
        style={{
          height: 0,

          width: 0,
          alignSelf: 'center',
          bottom: 0,
        }}
      />

      <View style={styles.view3}>
        <LottieView
          source={require('../../animations/1.json')}
          autoPlay={true}
          loop={true}
          style={{
            height: 50,
            width: 1,
            alignSelf: 'center',
            bottom: 0,
          }}
        />
      </View>
      <View>
        <MapView
          style={{height: 0, width: 0}}
          provider={PROVIDER_GOOGLE}
          onUserLocationChange={loc}
          showsUserLocation={true}
          showsCompass={false}
          initialRegion={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}></MapView>
      </View>
    </ImageBackground>
  );
};

export default P0;
