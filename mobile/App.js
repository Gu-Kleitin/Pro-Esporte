import AppNavigator from './src/navigation/AppNavigator';
import { useEffect, useState } from 'react';
import { obterUsuario } from './src/storage/authStorage';

export default function App() {
  const [usuario, setUsuario] = useState(undefined);
  useEffect(() => {

    async function carregarSessao(){
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
