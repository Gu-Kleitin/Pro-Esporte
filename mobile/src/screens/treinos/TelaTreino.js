import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { existeQuestionario } from '../../database/treinoRepository';

export default function TelaTreinos({ navigation }) {

    useEffect(() => {
        verificarQuestionario();
    }, []);

    async function verificarQuestionario() {

        const respondeu = await existeQuestionario();

        if (respondeu) {
            navigation.replace('TelaDashboardTreino');
        } else {
            navigation.replace('TelaQuestionarioTreino');
        }

    }

    return (
        <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <ActivityIndicator size="large"/>
        </View>
    );

}