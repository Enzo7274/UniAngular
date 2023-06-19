from app.dao.base_dao import BaseDao

class SalaService(BaseDao):

    def __init__(self):
        BaseDao.__init__(self)
    
    def getSala(self, id):
        params = [id]
        return self.queryParam("SELECT * FROM salas WHERE id=?", params)
    
    def getSalas(self):
        return self.query("SELECT * FROM salas")
    
    def save(self, sala):
        params = [sala['numSala'],sala['andar']]
        return self.execute_dml("INSERT INTO salas (numSala, andar) VALUES (?,?)", params)
    
    def update(self,sala):
        params = [sala['numSala'],sala['andar'],sala['id']]
        return self.execute_dml("UPDATE salas SET numSala = ?, andar=? WHERE id=?", params)
    
    def remove(self, id):
        params = [id]
        return self.execute_dml("DELETE FROM salas WHERE id = ?", params)