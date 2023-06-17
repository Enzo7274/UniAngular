from app.dao.base_dao import BaseDao

class CursoService(BaseDao):

    def __init__(self):
        BaseDao.__init__(self)
    
    def getCurso(self, id):
        params = [id]
        return self.queryParam("SELECT * FROM cursos WHERE id=?", params)
    
    def getCursos(self):
        return self.query("SELECT * FROM cursos")
    
    def save(self, curso):
        params = [curso['nome'],curso['descr']]
        return self.execute_dml("INSERT INTO cursos (nome, descr) VALUES (?,?)", params)
    
    def update(self,curso):
        params = [curso['nome'],curso['descr'],curso['id']]
        return self.execute_dml("UPDATE cursos SET nome = ?, descr=? WHERE id=?", params)
    
    def remove(self, id):
        params = [id]
        return self.execute_dml("DELETE FROM cursos WHERE id = ?", params)