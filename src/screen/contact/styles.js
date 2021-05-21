import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
  },

  view2: {
    width: 300,
    height: 100,
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },

  item: {
    padding: 10,
    marginVertical: 30,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },

  line: {
    width: 300,
    height: 3,
    marginTop: 20,
    backgroundColor: '#171717',
    justifyContent: 'center',
  },
});
export default styles;
