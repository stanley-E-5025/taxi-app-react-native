import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },

  view: {
    alignItems: 'center',
  },

  viewbt: {
    backgroundColor: '#ffffff',

    width: 80,
    height: 600,
    position: 'absolute',
    alignSelf: 'flex-start',
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

    width: 240,
    height: 50,
    borderRadius: 15,

    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
  },
  presable2: {
    backgroundColor: '#171717',

    width: 240,
    height: 50,
    borderRadius: 15,
    marginTop: 400,
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

  viev2: {
    position: 'absolute',
    alignSelf: 'center',
  },

  menu: {
    height: 30,
    width: 60,

    position: 'absolute',
    borderRadius: 10,
    margin: 20,
  },

  aa: {
    width: 100,
    height: 100,
    backgroundColor: '#000000',
  },

  myLocationButton: {
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 15,
    elevation: 3,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    borderRadius: 50,
  },
  test: {
    height: '100%',
    backgroundColor: '#ffffff',
    width: 200,
  },
});

export default styles;
