import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contaier: {
    backgroundColor: '#171717',
    width: 400,
    height: 170,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 600,
    borderRadius: 10,
  },

  Text: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 15,
  },

  presable: {
    backgroundColor: '#ffffff',
    width: 150,
    height: 40,
    alignSelf: 'center',
    marginTop: 60,
    borderRadius: 10,
    justifyContent: 'center',
  },

  text2: {
    color: '#000000',
    textAlign: 'center',

    fontWeight: 'bold',
    fontSize: 15,
  },
  op: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:30,
    marginRight:30
  },
});
export default styles;
