import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    backgroundColor: '#ffffff',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
    backgroundColor: '#E8E8E8',
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
    backgroundColor: '#DEDEDE',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {
    color: '#171717',
  },

  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: '#D3D3D3',
    position: 'absolute',
    top: 28,
    left: 17,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 15,
  },

  drivertxt: {
    padding: 10,
    backgroundColor: '#E8E8E8',
    marginVertical: 5,
    marginLeft: 20,
    height: 40,
    borderRadius: 10,
    color: '#ffffff',
  },

  info: {
    width: 100,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#313131',
    justifyContent: 'center',
    alignItems: 'center',
    top: 445,
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
});

export default styles;
