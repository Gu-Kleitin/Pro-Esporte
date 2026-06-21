import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CardHome from '../../components/CardHome';
import Rodape from '../../components/Rodape';

import globalStyles from '../../styles/global';
import styles from '../../styles/TelaInicialCidadaoStyles';

export default function TelaInicialCidadao({ navigation }) {
  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        styles.container
      ]}
    >
      <View style={styles.fundoAmarelo} />
      <View style={styles.fundoPreto} />
      <View style={styles.linhaDiagonal} />

      <View style={styles.cardEventos}>
        <CardHome
          titulo="Eventos"
          descricao="Descubra o que está acontecendo na sua cidade"
          onPress={() =>
            //navigation.navigate('TelaEventos')
            console.log('Tela de Eventos')
        }
        />
      </View>

      <View style={styles.cardTreinos}>
        <CardHome
          titulo="Treinos"
          descricao="Responda o questionário sobre seus treinos"
          onPress={() =>
            //navigation.navigate('TelaQuestionario')
            console.log('Tela do questionário ou treinos')
        }
        />
      </View>

      <Rodape
        navigation={navigation}
        telaAtiva="inicio"
      />
    </SafeAreaView>
  );
}