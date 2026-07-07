import { View, Text } from 'react-native';

export default function TelaDashboardTreino() {
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
                Dashboard
            </Text>
        </View>
    );
}