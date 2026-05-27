import { StyleSheet } from 'react-native';
import colors from './StyleColors';

const globalStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default globalStyles;