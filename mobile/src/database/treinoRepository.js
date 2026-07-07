import db from './database';

// ==========================
// QUESTIONÁRIO
// ==========================

export async function existeQuestionario() {
    const resultado = await db.getFirstAsync(
        'SELECT * FROM questionario LIMIT 1'
    );

    return resultado !== null;
}

export async function salvarQuestionario(respostas) {

    await db.runAsync('DELETE FROM questionario');

    await db.runAsync(
        `
        INSERT INTO questionario
        (respostas, respondido)
        VALUES (?, ?)
        `,
        [
            JSON.stringify(respostas),
            1
        ]
    );

}

export async function obterQuestionario() {

    const resultado = await db.getFirstAsync(
        'SELECT * FROM questionario LIMIT 1'
    );

    if (!resultado) {
        return null;
    }

    return JSON.parse(resultado.respostas);

}



// ==========================
// TREINO
// ==========================

export async function salvarTreino(fichaTreino) {

    await db.runAsync('DELETE FROM rotina_treino');

    await db.runAsync(
        `
        INSERT INTO rotina_treino
        (ficha, sincronizado)
        VALUES (?, ?)
        `,
        [
            JSON.stringify(fichaTreino),
            0
        ]
    );

}

export async function obterTreino() {

    const resultado = await db.getFirstAsync(
        'SELECT * FROM rotina_treino LIMIT 1'
    );

    if (!resultado) {
        return null;
    }

    return JSON.parse(resultado.ficha);

}

export async function apagarTreino() {

    await db.runAsync(
        'DELETE FROM rotina_treino'
    );

}