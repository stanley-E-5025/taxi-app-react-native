import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    backgroundColor: '#171717',
  },

  view2: {
    height: 200,
    width: 200,
    top: 150,
    alignSelf: 'center',
    position: 'absolute',
  },
  img: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },

  view3: {
    height: 20,
    width: '100%',
    position: 'absolute',
    bottom: 14,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    flexDirection: 'row',
  },
});
export default styles;
