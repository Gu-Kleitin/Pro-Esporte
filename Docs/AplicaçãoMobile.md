# 📱 Tutorial – Configurando e Rodando o App Mobile

## 1. Acesse a pasta Mobile

No terminal, entre na pasta do aplicativo:

```bash
cd mobile
```

---

# 2. Instale as dependências do projeto

Caso ainda não tenha a pasta `node_modules`, execute:

```bash
npm install
```

Isso instalará todas as dependências listadas no `package.json`.

---

# 3. Instale o aplicativo Expo Go no celular

O aplicativo mobile utiliza o Expo para desenvolvimento.

Baixe o aplicativo:

* Android:
  https://play.google.com/store/apps/details?id=host.exp.exponent

* iOS:
  https://apps.apple.com/app/expo-go/id982107779

---

# 4. Inicie o projeto

No terminal, execute:

```bash
npm start
```

ou:

```bash
npx expo start
```

Isso abrirá o servidor de desenvolvimento do Expo.

---

# 5. Conecte o celular

* O computador e o celular precisam estar conectados na mesma rede Wi-Fi.
* Abra o aplicativo Expo Go no celular.
* Escaneie o QR Code exibido no terminal ou no navegador.

O aplicativo será carregado automaticamente no dispositivo.

---

# 6. Caso ocorra erro de conexão

Se o Expo Go não conseguir conectar ao projeto:

No terminal do Expo:

* Pressione a tecla:

```bash
s
```

Isso abrirá as opções de conexão.

Depois altere de:

```txt
LAN
```

para:

```txt
Tunnel
```

Após isso, escaneie novamente o QR Code.

---

# 7. Estrutura inicial do projeto

O projeto mobile utiliza:

* React Native
* Expo
* React Navigation
* AsyncStorage

A estrutura principal está organizada em:

```txt
src/
 ├── screens/
 ├── components/
 ├── navigation/
 ├── services/
 ├── contexts/
 ├── storage/
 ├── database/
 ├── hooks/
 ├── utils/
 └── styles/
```

---

# 8. Dependências já utilizadas no projeto

As principais dependências atuais são:

```bash
@react-navigation/native
@react-navigation/native-stack
react-native-screens
react-native-safe-area-context
@react-native-async-storage/async-storage
```
