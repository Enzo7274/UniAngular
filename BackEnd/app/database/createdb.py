import sqlite3

conn = sqlite3.connect('agenda.db')

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

cursor.execute("""
CREATE TABLE cursos (
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
nome TEXT NOT NULL,
descr TEXT NOT NULL
);
""")

cursor.execute("""
CREATE TABLE disciplinas (
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
nome TEXT NOT NULL,
dscr TEXT NOT NULL,
curso TEXT NOT NULL,
sala TEXT NOT NULL
);
""")

cursor.execute("""
CREATE TABLE salas (
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
numSala INTEGER NOT NULL,
andar INTEGER NOT NULL
);
""")

conn.close()