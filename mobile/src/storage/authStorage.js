import AsyncStorage from '@react-native-async-storage/async-storage'

export async function salvarUsuario(usuario) {
    try {
        await AsyncStorage.setItem(
            'usuario',
            JSON.stringify(usuario)
        );
    } catch (erro) {
        console.log(erro);
    }
}

export async function obterUsuario() {
    try {

        const usuario =
            await AsyncStorage.getItem(
                'usuario'
            );

        return usuario
            ? JSON.parse(usuario)
            : null;

    } catch (erro) {
        console.log(erro);
    }
}

export async function removerUsuario() {
    try {
        await AsyncStorage.removeItem(
            'usuario'
        );
    } catch (erro) {
        console.log(erro);
    }
}