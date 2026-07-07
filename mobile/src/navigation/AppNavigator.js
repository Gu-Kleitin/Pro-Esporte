import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Telas de login
import TelaBoasVindas from '../screens/TelaBoasVindas';
import TelaCidadao from '../screens/auth/TelaCidadao';
import TelaTipoCriadorEvento from '../screens/auth/TelaTipoCriadorEvento';
import TelaEmpresa from '../screens/auth/TelaEmpresa';
import TelaServidorPublico from '../screens/auth/TelaServidorPublico';

//Telas Iniciais
import TelaInicialCidadao from '../screens/telaInicial/TelaInicialCidadao';
import TelaInicialCriadorEventos from '../screens/telaInicial/TelaInicialCriadorEventos';

//Telas de eventos
import TelaEventos from '../screens/eventos/TelaEventos';
import TelaDetalhesEvento from '../screens/eventos/TelaDetalhesEvento';
import TelaCriarEventos from '../screens/eventos/TelaCriarEventos';

// Telas de treinos
import TelaTreinos from '../screens/treinos/TelaTreino';
import TelaQuestionarioTreino from '../screens/treinos/TelaQuestionarioTreino';
import TelaDashboardTreino from '../screens/treinos/TelaDashboardTreino';
import TelaRotinaTreino from '../screens/treinos/TelaRotinaTreino';
import TelaEvolucao from '../screens/treinos/TelaEvolucao';

//Telas do rodapé
import Rodape from '../components/Rodape';
import TelaPerfil from '../screens/perfil/TelaPerfil'


const Stack = createNativeStackNavigator();

export default function AppNavigator({
    usuario
}) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={
                    usuario?.logado
                        ? (
                            usuario.tipo === 'cidadao'
                            ? 'TelaInicialCidadao'
                            : 'TelaInicialCriadorEventos'
                        )
                        : 'TelaBoasVindas'
                }
            >
                <Stack.Screen
                    name="TelaBoasVindas"
                    component={TelaBoasVindas}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="TelaCidadao"
                    component={TelaCidadao}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="TelaTipoCriadorEvento"
                    component={TelaTipoCriadorEvento}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="TelaEmpresa"
                    component={TelaEmpresa}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="TelaServidorPublico"
                    component={TelaServidorPublico}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="TelaInicialCidadao"
                    component={TelaInicialCidadao}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="TelaInicialCriadorEventos"
                    component={TelaInicialCriadorEventos}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="TelaPerfil"
                    component={TelaPerfil}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="TelaEventos"
                    component={TelaEventos}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="TelaDetalhesEvento"
                    component={TelaDetalhesEvento}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="TelaCriarEventos"
                    component={TelaCriarEventos}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="TelaTreinos"
                    component={TelaTreinos}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="TelaQuestionarioTreino"
                    component={TelaQuestionarioTreino}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="TelaDashboardTreino"
                    component={TelaDashboardTreino}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="TelaRotinaTreino"
                    component={TelaRotinaTreino}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="TelaEvolucao"
                    component={TelaEvolucao}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}