# UniAngular
Projeto de site Angular com backend em Python
Utilizaremos no BackEnd Python, Flask, SQLite, JWT e HTML&JavaScript com Angular para o FrontEnd

# Funções do projeto:
-> Gerenciar salas, associa cada sala à uma disciplina, com cada disciplina associada à um curso <br>
->Autenticação de usuários <br>
->Todas as consultas devem ser exibidas em tabela <br>
Usuários: <br>
->admin cria/edita/deleta quaisquer sala/disciplina/curso/usuário <br>
->aluno se associa à uma sala e disciplina já previamente feita <br>
->Exibir cursos, disciplinas e salas existentes não precisa de autenticação <br>
 
# Chaves e atributos utilizados na database:
Usuário: <br>
-> id(int) <br>
->email (string) <br>
->nome (string) <br>
->login (string) <br>
->senha (string) <br>
Curso: <br>
->id (int) <br>
->nome (string) <br>
->descr(string) <br>
Disciplina: <br>
->id (int) <br>
->nome (string) <br>
->dscr(string) <br>
->Sala (OBJ Sala) <br>
->curso (OBJ curso) <br>
Sala: <br>
->id(int) <br>
->num° sala(int) <br>
->andar(int) <br>
