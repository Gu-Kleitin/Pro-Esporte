import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import { participarEvento } from '../../services/eventoService';
import { obterUsuario } from '../../storage/authStorage';

import styles from '../../styles/TelaDetalhesEventoStyles';
import globalStyles from '../../styles/global';

export default function TelaDetalhesEvento({
  route,
  navigation
}) {
  const { evento } = route.params;
  const [carregando, setCarregando] = useState(false);

  async function handleParticipar() {
    try {
      setCarregando(true);

      // Obter usuário logado
      const usuario = await obterUsuario();

      if (!usuario || usuario.tipo !== 'cidadao') {
        Alert.alert(
          'Acesso Negado',
          'Apenas cidadãos podem se inscrever em eventos.'
        );
        return;
      }

      // Enviar requisição de participação
      await participarEvento({
        idCidadao: usuario.identificador,
        idEvento: evento.ID_Evento
      });

      // Sucesso
      Alert.alert(
        'Inscrição Realizada',
        'Você se inscreveu com sucesso no evento!',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack()
          }
        ]
      );

    } catch (erro) {
      // Erro - utilizar mensagem da API
      Alert.alert(
        'Erro na Inscrição',
        erro.message || 'Não foi possível realizar a inscrição.'
      );
    } finally {
      setCarregando(false);
    }
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoVoltar}>
          ← Voltar
        </Text>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titulo}>
          {evento.titulo}
        </Text>

        <View style={styles.secaoInfo}>
          <Text style={styles.label}>
            Modalidade
          </Text>
          <Text style={styles.valor}>
            {evento.modalidade}
          </Text>
        </View>

        <View style={styles.secaoInfo}>
          <Text style={styles.label}>
            Local
          </Text>
          <Text style={styles.valor}>
            {evento.local}
          </Text>
        </View>

        <View style={styles.secaoInfo}>
          <Text style={styles.label}>
            Data
          </Text>
          <Text style={styles.valor}>
            {new Date(evento.data).toLocaleDateString('pt-BR')}
          </Text>
        </View>

        <View style={styles.secaoInfo}>
          <Text style={styles.label}>
            Horário
          </Text>
          <Text style={styles.valor}>
            {evento.horario}
          </Text>
        </View>

        <View style={styles.secaoInfo}>
          <Text style={styles.label}>
            Vagas Disponíveis
          </Text>
          <Text style={styles.valor}>
            {evento.vagas}
          </Text>
        </View>

        <View style={styles.secaoInfo}>
          <Text style={styles.label}>
            Descrição
          </Text>
          <Text style={styles.valor}>
            {evento.descricao}
          </Text>
        </View>

        {evento.empresa && (
          <View style={styles.secaoOrganizador}>
            <Text style={styles.subtitulo}>
              Organizador (Empresa)
            </Text>
            <Text style={styles.valor}>
              <Text style={styles.labelPequeno}>
                Nome:{' '}
              </Text>
              {evento.empresa.nome}
            </Text>
            <Text style={styles.valor}>
              <Text style={styles.labelPequeno}>
                Email:{' '}
              </Text>
              {evento.empresa.email}
            </Text>
          </View>
        )}

        {evento.servidor && (
          <View style={styles.secaoOrganizador}>
            <Text style={styles.subtitulo}>
              Organizador (Servidor Público)
            </Text>
            <Text style={styles.valor}>
              <Text style={styles.labelPequeno}>
                Nome:{' '}
              </Text>
              {evento.servidor.nome}
            </Text>
            <Text style={styles.valor}>
              <Text style={styles.labelPequeno}>
                Email:{' '}
              </Text>
              {evento.servidor.email}
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={[
            styles.botaoParticipar,
            carregando && styles.botaoDesabilitado
          ]}
          onPress={handleParticipar}
          disabled={carregando}
        >
          {carregando ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.textoBotao}>
              Participar do Evento
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
