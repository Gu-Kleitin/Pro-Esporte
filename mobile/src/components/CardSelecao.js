import {
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import styles from '../styles/CardSelecaoStyles';

export default function CardSelecao({
  titulo,
  descricao,
  icone,
  onPress
}) {

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >

      <View style={styles.iconContainer}>
        {icone}
      </View>

      <Text style={styles.titulo}>
        {titulo}
      </Text>

      <Text style={styles.descricao}>
        {descricao}
      </Text>

    </TouchableOpacity>
  );
}