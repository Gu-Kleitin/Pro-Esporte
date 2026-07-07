import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('proesporte.db');

export function inicializarBanco() {

    db.execSync(`
        CREATE TABLE IF NOT EXISTS questionario (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            respondido INTEGER NOT NULL,
            respostas TEXT NOT NULL
        );
    `);

    db.execSync(`
        CREATE TABLE IF NOT EXISTS rotina (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            dados TEXT NOT NULL
        );
    `);

    db.execSync(`
        CREATE TABLE IF NOT EXISTS registro_treino (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            dia TEXT,
            exercicio TEXT,
            series INTEGER,
            repeticoes INTEGER,
            data TEXT,
            sincronizado INTEGER DEFAULT 0
        );
    `);

    console.log('Banco SQLite inicializado.');
}

export default db;