export function formatarTipoConta(tipo) {
  const tipos = {
    cidadao: 'Cidadão',
    empresa: 'Empresa',
    servidor_publico: 'Servidor Público',
    servidorPublico: 'Servidor Público'
  };

  return tipos[tipo] || '-';
}
