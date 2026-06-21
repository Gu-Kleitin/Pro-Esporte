import { StyleSheet } from 'react-native';
import colors from './StyleColors';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },

  fundoAmarelo: {
    position: 'absolute',
    width: '100%',
    height: '55%',
    backgroundColor: colors.primary,
    top: 0
  },

  fundoPreto: {
    position: 'absolute',
    width: '100%',
    height: '45%',
    backgroundColor: colors.background,
    bottom: 0
  },

  linhaDiagonal: {
    position: 'absolute',
    width: 500,
    height: 8,
    backgroundColor: colors.secondary,
    transform: [
      { rotate: '-45deg' }
    ],
    top: '42%',
    left: '-15%'
  },

  cardEventos: {
    marginTop: 60,
    marginHorizontal: 30
  },

  cardTreinos: {
    marginTop: 220,
    marginHorizontal: 30
  }
});