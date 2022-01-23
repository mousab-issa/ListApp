import {StyleSheet} from 'react-native';
import {theme} from '../../common/theme/theme';

const {Colors} = theme;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 10,
  },
  item: {
    height: 300,
    margin: 10,
    backgroundColor: 'red',
    borderRadius: 6,
  },
  searchContainer: {
    borderRadius: 10,
    backgroundColor: '#F3F3F3',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
  },
});
