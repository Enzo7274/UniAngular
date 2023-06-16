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
        params = [usuario['nome'],usuario['email'],usuario['telefone']]
        return self.execute_dml("INSERT INTO usuarios (nome, email, telefone) VALUES (?,?,?)", params)
    
    def update(self,usuario):
        params = [usuario['nome'],usuario['email'],usuario['telefone'],usuario['id']]
        return self.execute_dml("UPDATE usuarios SET nome = ?, email=?,telefone=? WHERE id=?", params)
    
    def remove(self, id):
        params = [id]
        return self.execute_dml("DELETE FROM usuarios WHERE id = ?", params)