import {
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import styles from '../styles/CardHomeStyles';

export default function CardHome({
  titulo,
  descricao,
  variant = 'eventos',
  onPress
}) {
  const isTreinos = variant === 'treinos';

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View>
        <Text
          style={[
            styles.titulo,
            isTreinos && styles.tituloTreinos
          ]}
        >
          {titulo}
        </Text>

        <Text
          style={[
            styles.descricao,
            isTreinos && styles.descricaoTreinos
          ]}
        >
          {descricao}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
