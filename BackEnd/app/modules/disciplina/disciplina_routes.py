from app.modules.disciplina.disciplina_service import DisciplinaService
from app.utils.security import jwtDecode
from flask import abort, Blueprint, jsonify, request, Response
from flask_cors import CORS, cross_origin
import requests
import json

disciplina_routes = Blueprint("disciplina", __name__)
disciplinaDAO = DisciplinaService()

@disciplina_routes.route("/api/v1/disciplina/<string:id>")
@cross_origin()
def get_disciplina(id):
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                disciplina = disciplinaDAO.getDisciplina(id)
                if disciplina != None:
                    disciplinaObj = {}
                    disciplinaObj["id"]=disciplina[0]
                    disciplinaObj["nome"]=disciplina[1]
                    disciplinaObj["dscr"]=disciplina[2]
                    disciplinaObj["curso"]=disciplina[3]
                    disciplinaObj["sala"]=disciplina[4]
                    return jsonify(disciplinaObj)
                return {"message":"Disciplina não localizado"},500
            else:
                return {"message":"Sem permissão"},500
        else:
            return {"message":"Sem permissão"},500
    except Exception as e:
        return{"message":str(e)},500

@disciplina_routes.route("/api/v1/disciplinas")
@cross_origin()
def get_disciplinas():
    try:
        if'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                disciplinas = disciplinaDAO.getDisciplinas()
                listaDisciplinas=[]
                if len(disciplinas) > 0:
                    for disciplina in disciplinas:
                        disciplinaObj = {}
                        disciplinaObj["id"]=disciplina[0]
                        disciplinaObj["nome"]=disciplina[1]
                        disciplinaObj["dscr"]=disciplina[2]
                        disciplinaObj["curso"]=disciplina[3]
                        disciplinaObj["sala"]=disciplina[4]
                        listaDisciplinas.append(disciplinaObj)
                    return jsonify(listaDisciplinas)
                else:
                    return{"message":"Sem permissão"},500
            else:
                return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500
    
@disciplina_routes.route("/api/v1/disciplina", methods=['POST'])
@cross_origin()
def save():
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                if request.json and "disciplina" in request.json:
                    disciplina = request.json["disciplina"]
                    disciplinaDAO.save(disciplina)
                    return {"message":"Disciplina salvo com sucesso"}, 200
                else:
                    return {"message":"O campo disciplina está vazio"}, 500
            else:
                return {"message":"Sem permissão"},500
        else:
            return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500

@disciplina_routes.route("/api/v1/disciplina", methods=["PUT"])
def update_disciplina():
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                    if request.json and "disciplina" in request.json:
                        disciplina = request.json["disciplina"]
                        disciplinaDAO.update(disciplina)
                        return {"message":"Disciplina atualizado com sucesso"}, 200
                    else:
                        return {"message":"O campo disciplina está vazio"}, 500
            else:
                    return {"message":"Sem permissão"},500
        else:
                return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500

@disciplina_routes.route("/api/v1/disciplina/<string:id>", methods=['DELETE'])
@cross_origin()
def remove(id):
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                retorno = disciplinaDAO.remove(id)
                if retorno == 0:
                    return {"message":"O disciplina não foi removido"},500
                return {"message":"Disciplina removido com sucesso"},200
            else:
                return {"message":"Sem permissão"},500
        else:
            return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500

