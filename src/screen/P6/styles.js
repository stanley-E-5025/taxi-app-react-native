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
  },

  pres2: {
    position: 'absolute',
    width: 150,
    height: 30,
    borderRadius: 10,
    bottom: 200,
    left: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
});

export default styles;
