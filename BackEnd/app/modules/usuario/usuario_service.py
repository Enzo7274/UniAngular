from app.dao.base_dao import BaseDao

class UsuarioService(BaseDao):

    def __init__(self):
        BaseDao.__init__(self)
    
    def getUsuario(self, id):
        params = [id]
        return self.queryParam("SELECT * FROM usuarios WHERE id=?", params)
    
    def getUsuarios(self):
        return self.query("SELECT * FROM usuarios")
    
    def save(self, usuario):
        params = [usuario['email'],usuario['nome'],usuario['login'],usuario['senha']]
        return self.execute_dml("INSERT INTO usuarios (email, nome, login, senha) VALUES (?,?,?,?)", params)
    
    def update(self,usuario):
        params = [usuario['email'],usuario['nome'],usuario['login'],usuario['senha'],usuario['id']]
        return self.execute_dml("UPDATE usuarios SET email = ?, nome=?, login=?, senha=? WHERE id=?", params)
    
    def remove(self, id):
        params = [id]
        return self.execute_dml("DELETE FROM usuarios WHERE id = ?", params)