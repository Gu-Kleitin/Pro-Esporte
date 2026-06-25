# ProEsporte - Contexto do Projeto

## Estrutura do Projeto

- front_end: versão web do sistema.
- mobile: versão React Native.
- Back-end: API REST.
- banco: scripts e documentação do banco.
- Docs: documentação do projeto.

## Regra Principal

O desenvolvimento atual está focado exclusivamente na pasta `mobile`.

As telas e os fluxos de negócio do mobile devem se basear na implementação existente em `front_end`, porém:

- O front-end foi feito com html, css e js, NÃO é pra reutilizar isso no mobile.
- NÃO utilize HTML ou CSS.
- Sempre implemente utilizando React Native e Expo.

## Persistência de Dados

### Dados Locais
- SQLite existirá apenas no mobile.
- O SQLite é utilizado principalmente no módulo de treinos.
- AsyncStorage em `mobile` é para permanência de sessão e para os eventos.

### Dados Remotos
- Usuários, eventos e demais funcionalidades utilizam a API do Back-end.
- O Back-end e o banco principal serão hospedados em servidores gratuitos.

## Ao gerar código

1. Priorize alterações dentro da pasta `mobile`.
2. Analise a implementação equivalente em `front_end`.
3. Mantenha o mesmo fluxo de negócio.
4. Não altere o `front_end`, exceto se solicitado.
5. Utilize:
   - React Native
   - Expo
   - React Navigation
   - Hooks
   - Async/Await
   - Componentes funcionais.

## Importante

Use o `front_end` apenas como referência de regras de negócio e de fluxo de navegação.