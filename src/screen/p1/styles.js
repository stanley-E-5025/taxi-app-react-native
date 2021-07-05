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
    width: 25,
    height: 25,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  text21: {
    color: '#000000',
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

    width: 353,
    height: 50,
    borderRadius: 8,

    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    borderColor: '#000000',
    borderWidth: 0.2,
    bottom: 15,
  },

  text: {
    textAlign: 'center',

    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  historial: {
    backgroundColor: '#ffffff',

    width: 50,
    height: 50,
    borderRadius: 100,

    justifyContent: 'center',
    position: 'absolute',
    bottom: 159,
    right: 10,
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 0.1,
  },
});

export default styles;
