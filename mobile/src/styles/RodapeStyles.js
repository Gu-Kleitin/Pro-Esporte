import { StyleSheet } from 'react-native';
import colors from './StyleColors';

export default StyleSheet.create({
  container: {
    position: 'absolute',

    bottom: 0,

    width: '100%',

    height: 90,

    backgroundColor: colors.secondary,

    borderTopWidth: 3,
    borderTopColor: '#FBBF24',

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center'
  },

  botao: {
    padding: 12,
    borderRadius: 15
  },

  botaoAtivo: {
    backgroundColor: colors.primary
  },

  texto: {
    color: '#fff',
    fontWeight: 'bold'
  }
});