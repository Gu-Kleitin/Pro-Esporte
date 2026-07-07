import { View, Text } from 'react-native';

export default function TelaEvolucao() {
    return (
        <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#000'
            }}
        >
            <Text style={{color:'#fff'}}>
                Evolução
            </Text>
        </View>
    );
}