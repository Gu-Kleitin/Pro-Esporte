import db from './database';

export async function criarTabelas() {

    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS questionario (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            respostas TEXT NOT NULL,
            respondido INTEGER DEFAULT 0
        );
    `);

    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS rotina_treino (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ficha TEXT NOT NULL,
            sincronizado INTEGER DEFAULT 0
        );
    `);

}