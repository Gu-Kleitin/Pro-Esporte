import { StyleSheet } from 'react-native';

import colors from './StyleColors';

const styles = StyleSheet.create({

  card: {
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 25,

    padding: 30,

    alignItems: 'center',

    marginBottom: 25
  },

  iconContainer: {
    marginBottom: 20
  },

  titulo: {
    color: colors.primary,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10
  },

  descricao: {
    color: colors.textSecondary,
    fontSize: 16,
    textAlign: 'center'
  }

});

export default styles;