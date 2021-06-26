import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  textInput: {
    padding: 10,

    marginVertical: 5,
    marginLeft: 20,
    backgroundColor: '#ffffff',
    height: 40,
    borderRadius: 10,
    color: '#000000',
  },

  separator: {
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#171717',
    padding: 4,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {
    color: '#171717',
  },

  circle: {
    width: 20,
    height: 20,
    backgroundColor: 'black',
    position: 'absolute',
    top: 15,
    left: 6,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 1,
    height: 25,
    backgroundColor: '#D3D3D3',
    position: 'absolute',
    top: 43,
    left: 17,
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: 'black',
    position: 'absolute',
    top: 75,
    left: 6,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  drivertxt: {
    backgroundColor: '#ffffff',

    marginLeft: 20,
    height: 40,
    borderRadius: 10,
    color: '#ffffff',
    position: 'absolute',
    paddingLeft: 10,
    width: 300,
    color: '#000000',
  },

  info: {
    width: 100,
    height: 30,
    borderRadius: 7,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    top: 400,
    position: 'absolute',
    marginLeft: 20,
  },
  save: {
    width: 150,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txt: {
    fontWeight: 'bold',
    color: '#D3D3D3',
  },
  txt2: {
    fontWeight: 'bold',
    color: '#171717',
  },

  input: {
    width: 45,
    height: 45,
    backgroundColor: '#ffffff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    right: 10,
  },
});

export default styles;
