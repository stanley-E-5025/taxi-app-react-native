import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  map: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  view: {
    width: '100%',
    height: '100%',
  },
  Text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  custom: {
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  t2: {
    color: '#ffffff',
  },
  pres: {
    position: 'absolute',
    width: 100,
    height: 30,
    alignSelf: 'flex-start',
    margin: 20,
    borderRadius: 10,

    backgroundColor: '#ffffff',
    justifyContent: 'center',

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },

  pres2: {
    position: 'absolute',
    width: '95%',
    height: 170,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },

  carN: {
    width: 70,
    height: 70,

    backgroundColor: '#E4E4E4',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,
    left: 10,
    borderRadius: 100,
  },

  price: {
    width: 100,
    height: 30,

    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,

    borderRadius: 5,
    right: 1,
    position: 'absolute',
    flexDirection: 'row',
  },

  name: {
    width: 150,
    height: 20,

    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,

    borderRadius: 5,
    left: 5,
    position: 'absolute',
  },
  Image: {
    width: 70,
    height: 70,
  },

  time: {
    width: 150,
    height: 30,

    justifyContent: 'center',
    alignItems: 'center',
    bottom: 130,

    borderRadius: 5,
    right: 10,
    position: 'absolute',
    flexDirection: 'row',
  },
  timeitem: {
    width: 60,
    height: 45,

    justifyContent: 'center',
    alignItems: 'center',
    bottom: 95,

    right: 20,
    position: 'absolute',
    flexDirection: 'row',
  },

  total: {
    width: 100,
    height: 30,

    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,

    borderRadius: 5,
    right: 1,
    position: 'absolute',
    flexDirection: 'row',
  },

  press3: {
    width: '100%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    backgroundColor: 'green',
  },

  press2: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    backgroundColor: 'red',
  },
});

export default styles;
