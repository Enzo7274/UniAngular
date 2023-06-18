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
        params = [curso['nome'],curso['dscr']]
        return self.execute_dml("INSERT INTO cursos (nome, dscr) VALUES (?,?)", params)
    
    def update(self,curso):
        params = [curso['nome'],curso['dscr'],curso['id']]
        return self.execute_dml("UPDATE cursos SET nome = ?, dscr=? WHERE id=?", params)
    
    def remove(self, id):
        params = [id]
        return self.execute_dml("DELETE FROM cursos WHERE id = ?", params)