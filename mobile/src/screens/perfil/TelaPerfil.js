import {
  View,
  Text
} from 'react-native';

import {
  SafeAreaView
} from 'react-native-safe-area-context';

import {
  obterUsuario,
  removerUsuario
} from '../../storage/authStorage';

import { useEffect, useState } from 'react';

import BotaoCriarConta from '../../components/BotaoCriarConta';

import globalStyles from '../../styles/global';

export default function TelaPerfil({
  navigation
}) {
  const [usuario, setUsuario] =
    useState(null);

  useEffect(() => {
    async function carregar() {
      const sessao =
        await obterUsuario();

      setUsuario(sessao);
    }

    carregar();
  }, []);

  async function sair() {
    await removerUsuario();

    navigation.replace(
      'TelaBoasVindas'
    );
  }

  return (
    <SafeAreaView
      style={globalStyles.container}
    >
      <Text>
        Nome:
      </Text>

      <Text>
        {usuario?.nome}
      </Text>

      <Text>
        Tipo:
      </Text>

      <Text>
        {usuario?.tipo}
      </Text>

      <BotaoCriarConta
        titulo="Sair da Conta"
        onPress={sair}
      />
    </SafeAreaView>
  );
}