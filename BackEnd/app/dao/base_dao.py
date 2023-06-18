from app.config import config
import sqlite3

class BaseDao:
    
    def connect(self):
        self.conn =sqlite3.connect(config.DATABASE_NAME)
        self.cur = self.conn.cursor()

    def disconnect(self):
        self.cur.close()
        self.conn.close()

    def queryParam(self, query, params):
        self.connect()
        self.cur.execute(query, (params))
        contato = self.cur.fetchone()
        self.disconnect()
        return contato
    
    def query(self,query):
        self.connect()
        self.cur.execute(query)
        list = self.cur.fetchall()
        self.disconnect()
        return list
    
    def execute_dml(self, dml_command, params):
        self.connect()
        retorno = self.cur.execute(dml_command, (params))
        linhasAfetadas = retorno.rowcount
        self.conn.commit()
        self.disconnect()
        return linhasAfetadas