from app.dao.base_dao import BaseDao

class DisciplinaService(BaseDao):

    def __init__(self):
        BaseDao.__init__(self)
    
    def getDisciplina(self, id):
        params = [id]
        return self.queryParam("SELECT * FROM disciplinas WHERE id=?", params)
    
    def getDisciplinas(self):
        return self.query("SELECT * FROM disciplinas")
    
    def save(self, disciplina):
        params = [disciplina['nome'],disciplina['dscr'],disciplina['curso'],disciplina['sala']]
        return self.execute_dml("INSERT INTO disciplinas (nome, dscr, curso, sala) VALUES (?,?,?,?)", params)
    
    def update(self,disciplina):
        params = [disciplina['nome'],disciplina['dscr'],disciplina['curso'],disciplina['sala'],disciplina['id']]
        return self.execute_dml("UPDATE disciplinas SET nome = ?, dscr=?, curso=?, sala=? WHERE id=?", params)
    
    def remove(self, id):
        params = [id]
        return self.execute_dml("DELETE FROM disciplinas WHERE id = ?", params)