<p align="center">
  <img src="./front_end/img/Logo.png" alt="Logo ProEsporte" width="200">
</p>

# ProEsporte Sabará

Plataforma digital para gestão e personalização esportiva municipal, conectando cidadãos, empresas e servidores públicos em torno de eventos esportivos e recomendação de atividades físicas.

## Licença

Este projeto é distribuído sob a **GNU General Public License v3.0 (GPL-3.0)**. Veja o arquivo [`LICENSE`](./LICENSE) na raiz do repositório para o texto completo.

> O projeto está aberto à adoção de **dual-licensing** com licenças compatíveis, caso módulos específicos (ex: conteúdo/assets, ou eventuais bibliotecas de terceiros integradas) exijam termos distintos no futuro. Até o momento, todo o código-fonte (mobile, back-end e front-end web) está sob GPL-3.0.

## Sobre o projeto

O ProEsporte nasceu para resolver um problema real da gestão esportiva municipal: informações sobre eventos e atividades esportivas dispersas entre diferentes setores, baixa adesão da população por falta de divulgação centralizada, e infraestrutura pública (praças, academias ao ar livre, quadras) subutilizada por falta de orientação sobre como aproveitá-la.

A plataforma funciona como núcleo digital desse programa esportivo, oferecendo:

- **Divulgação e participação em eventos esportivos**: empresas e servidores públicos cadastram eventos; cidadãos consultam, filtram e participam.
- **Recomendação de treinos**: a partir de um questionário sobre perfil, objetivos e equipamentos disponíveis, o sistema gera um plano de treino personalizado.

**Estado atual x objetivo do módulo de recomendação:** hoje o módulo está implementado especificamente para **calistenia/street workout** — o questionário identifica o nível do usuário e gera uma ficha de treino adaptada aos equipamentos públicos disponíveis (barra fixa, paralelas, estruturas de praça, etc.), dividida por dias e exercícios. O **objetivo do projeto**, no entanto, é ampliar esse módulo para que ele não fique restrito à calistenia: a ideia é que o sistema **recomende ao cidadão qual atividade física praticar** (dentre diferentes modalidades esportivas, não só street workout) **e os locais onde ele pode praticá-la**, com a calistenia permanecendo como o primeiro caso implementado dessa recomendação — servindo de base para, no futuro, oferecer o mesmo nível de personalização (planos específicos de treino) para outras modalidades.

## Funcionalidades básicas

- **Cadastro e login** de três perfis de usuário: Cidadão, Empresa e Servidor Público.
- **Cadastro de eventos esportivos** por empresas e servidores públicos (nome, modalidade, local, data, horário, vagas, descrição).
- **Consulta e filtro de eventos** por cidadãos (modalidade, turno, local) e participação em eventos.
- **Questionário de perfil** para recomendação de treino, considerando objetivo do usuário (força, resistência, habilidades, saída do sedentarismo) e equipamentos/infraestrutura disponíveis.
- **Geração de plano de treino personalizado em calistenia/street workout** — funcionalidade já implementada, com divisão por dias, exercícios, séries e repetições. É o primeiro caso concreto do módulo de recomendação; o objetivo do projeto é evoluir esse módulo para recomendar, de forma mais ampla, qual atividade física praticar (não só calistenia) e indicar locais para praticá-la, mantendo a calistenia como uma das modalidades suportadas.
- **Sincronização entre servidor e dispositivo**: o banco de dados remoto é a fonte única da verdade — ao logar, o app busca a rotina salva no servidor; ao deslogar, os dados locais daquela conta são apagados do aparelho.
- **Acesso via web ou aplicativo mobile**, ambos consumindo a mesma API.

## Melhorias futuras

- Ampliar o módulo de recomendação, hoje restrito à calistenia/street workout, para recomendar de forma geral qual atividade física praticar e indicar locais de prática — mantendo a calistenia como uma das modalidades suportadas e como referência para futuras recomendações específicas de outras práticas esportivas.
- Implementar o acompanhamento de evolução do usuário (registro de séries/repetições concluídas, histórico de treinos realizados).
- Revisar e sincronizar as *migrations* do banco de dados com o estado real das tabelas em produção.
- Implementar autenticação baseada em token (JWT) e hash de senha (bcrypt), hoje adequados apenas ao escopo acadêmico atual.
- Adicionar testes automatizados (unitários e de integração) para back-end e mobile.
- Publicar builds mobile de forma recorrente (CI/CD) via EAS Build, reduzindo o processo manual atual.
- Ampliar a base de eventos e locais parceiros, incluindo integração com espaços públicos (praças, academias ao ar livre) geolocalizados.

## Interfaces disponíveis

O projeto é composto por três frentes que compartilham a mesma API:

| Interface | Descrição | Status |
|---|---|---|
| **Mobile** (`mobile/`) | Aplicativo React Native (Expo) para Android/iOS. Interface principal do projeto, com cadastro/login, eventos, questionário de recomendação e treinos. | Em desenvolvimento ativo |
| **Web** (`front_end/`) | Interface web construída em HTML, CSS e JavaScript. Serviu como referência inicial de fluxos de negócio e telas. | Referência que receberá novas atualizações |
| **Servidor / API** (`Back-end/`) | API REST em Node.js que atende tanto o mobile quanto a web, com toda a regra de negócio e persistência. | Em desenvolvimento ativo |

> O desenvolvimento atual está concentrado no **mobile**. O front-end web é mantido como referência de fluxo e regras de negócio, mas não é replicado tecnicamente (o mobile não reaproveita HTML/CSS/JS — é construído nativamente com React Native).

## Arquitetura e tecnologias

| Camada | Tecnologia | Função |
|---|---|---|
| **Mobile** | React Native + Expo, React Navigation, SQLite (`expo-sqlite`), AsyncStorage | App multiplataforma. SQLite guarda dados locais do módulo de treinos; AsyncStorage mantém sessão do usuário. |
| **Web** | HTML, CSS, JavaScript | Interface web de referência para consulta e participação em eventos. |
| **Back-end / API** | Node.js, Express, Sequelize (ORM) | Motor de recomendação (comparação de perfil por distância euclidiana / abordagem inspirada em KNN), autenticação, CRUD de eventos e usuários. |
| **Banco de dados** | MySQL | Armazena usuários (cidadão, empresa, servidor público), eventos, participações, rotinas de treino e exercícios. |
| **Infraestrutura** | Render (API) + AlwaysData (MySQL) | Hospedagem em serviços gratuitos, permitindo acesso externo ao app sem depender de rede local. |

### Persistência de dados

- **Dados locais (mobile)**: SQLite é usado no módulo de treinos, para permitir uso offline e resposta rápida; AsyncStorage guarda sessão do usuário logado.
- **Dados remotos**: usuários, eventos, participações e rotinas de treino têm o **servidor/banco remoto como fonte única da verdade** — ao logar, o app sincroniza os dados do servidor para o aparelho; ao deslogar, os dados locais daquela conta são apagados.

## Estrutura do repositório

```
Pro-Esporte/
 ├── front_end/    → versão web (HTML/CSS/JS), referência de fluxo
 ├── mobile/       → app React Native/Expo (foco atual de desenvolvimento)
 ├── Back-end/     → API REST (Node.js/Express/Sequelize)
 ├── banco/        → scripts e documentação do banco de dados
 └── Docs/         → documentação do projeto
```

## Como executar

### Pré-requisitos gerais

- **Node.js** (recomenda-se gerenciar a versão com [nvm](https://github.com/nvm-sh/nvm))
- **MySQL** (local, via XAMPP ou instalação própria) para desenvolvimento
- **Expo Go** instalado no celular (Android/iOS), para testar o app mobile

### Clonando o projeto

```bash
git clone https://github.com/Gu-Kleitin/Pro-Esporte.git
cd Pro-Esporte
```

### Rodando o Back-end (API)

```bash
cd Back-end
npm install
```

Configure o acesso ao banco em `config/database.js` (ou via variáveis de ambiente `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, se for rodar contra um banco remoto).

```bash
npm run dev
```

A API sobe por padrão na porta `3333`.

### Rodando o Mobile (Expo)

```bash
cd mobile
npm install
npx expo start
```

Escaneie o QR code exibido com o app **Expo Go** no celular. Certifique-se de que o `API_URL` em `services/api.js` aponta para o endereço correto da API (local ou hospedada).

> Se o celular estiver em uma rede diferente da máquina que roda o Metro Bundler, use `npx expo start --tunnel` para expor o app pela internet.

### Rodando o Front-end web

Abra os arquivos em `front_end/` diretamente no navegador ou sirva a pasta com um servidor estático de sua preferência, garantindo que a API esteja acessível a partir da URL configurada no JavaScript do front-end.

## Implantação (deploy)

- **API**: hospedada no [Render](https://render.com) (plano gratuito).
- **Banco de dados**: hospedado no [AlwaysData](https://www.alwaysdata.com) (MySQL, plano gratuito).
- **Mobile**: builds de teste (`.apk`) gerados via [EAS Build](https://docs.expo.dev/build/introduction/), permitindo instalação direta no Android sem depender do Expo Go.

## Como Contribuir

Este é um projeto de desenvolvimento contínuo e aberto a contribuições. Se você tem interesse em ajudar, seja com código, documentação ou sugestões, leia nosso **[Guia de Contribuição](CONTRIBUTING.md)** para começar.

> Agradecemos por qualquer feedback ou sugestão! 💡
