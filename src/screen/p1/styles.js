import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },

  view: {
    alignItems: 'center',
  },
  custom: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
  },
  text21: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  main: {
    width: 100,
    height: 50,
    borderRadius: 10,

    justifyContent: 'center',
    position: 'absolute',
  },

  presable: {
    backgroundColor: '#171717',

    width: 230,
    height: 50,
    borderRadius: 10,

    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
  },

  text: {
    textAlign: 'center',

    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
