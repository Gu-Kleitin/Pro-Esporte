import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  StyleSheet 
} from 'react-native';

import styles from '../styles/LoginStyles'

export default function LoginScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        ProEsporte Sabará
      </Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>

    </View>
  );
}
