import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  botaoVoltar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8
  },

  textoVoltar: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333'
  },

  conteudo: {
    paddingHorizontal: 16,
    paddingBottom: 32
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24
  },

  secaoInfo: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 4
  },

  labelPequeno: {
    fontWeight: '600',
    color: '#666'
  },

  valor: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22
  },

  secaoOrganizador: {
    marginTop: 20,
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8
  },

  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12
  },

  botaoParticipar: {
    marginTop: 24,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#FFC107',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  botaoDesabilitado: {
    opacity: 0.6
  },

  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  }
});

export default styles;
