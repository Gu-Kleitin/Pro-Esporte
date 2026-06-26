import { StyleSheet } from 'react-native';

const AMARELO = '#FBBF24';
const CARD = '#161b22';
const TEXTO_SECUNDARIO = '#8b949e';
const LOGOUT = '#ef4444';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },

  conteudo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 120
  },

  header: {
    alignItems: 'center',
    marginBottom: 35
  },

  avatarCircle: {
    width: 110,
    height: 110,
    backgroundColor: AMARELO,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },

  avatarIcon: {
    fontSize: 55
  },

  nome: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  secaoTitulo: {
    color: AMARELO,
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 15
  },

  perfilCard: {
    backgroundColor: CARD,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },

  cardIcon: {
    fontSize: 22,
    marginRight: 15,
    minWidth: 30
  },

  cardContent: {
    flex: 1
  },

  cardLabel: {
    color: TEXTO_SECUNDARIO,
    fontSize: 12,
    marginBottom: 2
  },

  cardValor: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16
  },

  btnLogout: {
    backgroundColor: LOGOUT,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },

  btnLogoutTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});
