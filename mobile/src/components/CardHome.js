import {
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import styles from '../styles/CardHomeStyles';

export default function CardHome({
  titulo,
  descricao,
  onPress
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View>
        <Text style={styles.titulo}>
          {titulo}
        </Text>

        <Text style={styles.descricao}>
          {descricao}
        </Text>
      </View>
    </TouchableOpacity>
  );
}