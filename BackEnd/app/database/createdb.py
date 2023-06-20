import sqlite3

conn = sqlite3.connect('./universidade.db')

cursor = conn.cursor()

cursor.execute("""
CREATE TABLE usuarios (
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
email TEXT NOT NULL,
nome TEXT NOT NULL,
login TEXT NOT NULL,
senha TEXT NOT NULL
);
""")
print("Tabela 'usuarios' criada com sucesso.")

cursor.execute("""
CREATE TABLE cursos (
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
nome TEXT NOT NULL,
dscr TEXT NOT NULL
);
""")
print("Tabela 'cursos' criada com sucesso.")

cursor.execute("""
CREATE TABLE disciplinas (
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
nome TEXT NOT NULL,
dscr TEXT NOT NULL,
curso TEXT NOT NULL,
sala TEXT NOT NULL
);
""")
print("Tabela 'disciplinas' criada com sucesso.")

cursor.execute("""
CREATE TABLE salas (
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
numSala INTEGER NOT NULL,
andar INTEGER NOT NULL
);
""")
print("Tabela 'salas' criada com sucesso.")

cursor.close()
conn.close()