import { StyleSheet } from 'react-native';
import colors from './StyleColors';

export default StyleSheet.create({
  card: {
    width: 300,
    minHeight: 120,

    backgroundColor: colors.primary,

    borderRadius: 25,

    padding: 25,

    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15
  },

  descricao: {
    fontSize: 16,
    color: '#000'
  }
});