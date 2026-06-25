import { StyleSheet } from 'react-native';

const AMARELO = '#FBBF24';

export default StyleSheet.create({
  card: {
    width: 320,
    backgroundColor: 'rgba(212, 166, 50, 0.5)',
    borderRadius: 18,
    padding: 25,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10
  },

  descricao: {
    fontSize: 16,
    color: '#000000'
  },

  tituloTreinos: {
    color: AMARELO
  },

  descricaoTreinos: {
    color: AMARELO
  }
});
