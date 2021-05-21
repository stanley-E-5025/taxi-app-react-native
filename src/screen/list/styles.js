import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
  },

  view2: {
    backgroundColor: '#000000',
    width: 100,
    height: 100,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: '50%',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default styles;
