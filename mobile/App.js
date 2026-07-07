import { useEffect, useState } from 'react';

import AppNavigator from './src/navigation/AppNavigator';

import { obterUsuario } from './src/storage/authStorage';

import { inicializarBanco } from './src/database/database';

export default function App() {

  const [usuario, setUsuario] = useState(undefined);

  useEffect(() => {

    inicializarBanco();

    async function carregarSessao() {

      const sessao = await obterUsuario();

      setUsuario(sessao);

    }

    carregarSessao();

  }, []);

  if (usuario === undefined) {
    return null;
  }

  return (
    <AppNavigator usuario={usuario} />
  );

}