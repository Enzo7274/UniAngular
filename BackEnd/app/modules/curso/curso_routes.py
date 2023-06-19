from app.modules.curso.curso_service import CursoService
from app.utils.security import jwtDecode
from flask import abort, Blueprint, jsonify, request, Response
from flask_cors import CORS, cross_origin
import requests
import json

curso_routes = Blueprint("curso", __name__)
cursoDAO = CursoService()

@curso_routes.route("/api/v1/curso/<string:id>")
@cross_origin()
def get_curso(id):
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                curso = cursoDAO.getCurso(id)
                if curso != None:
                    cursoObj = {}
                    cursoObj["id"]=curso[0]
                    cursoObj["nome"]=curso[1]
                    cursoObj["dscr"]=curso[2]
                    return jsonify(cursoObj)
                return {"message":"Curso não localizado"},500
            else:
                return {"message":"Sem permissão"},500
        else:
            return {"message":"Sem permissão"},500
    except Exception as e:
        return{"message":str(e)},500

@curso_routes.route("/api/v1/cursos")
@cross_origin()
def get_cursos():
    try:
        if'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                cursos = cursoDAO.getCursos()
                listaCursos=[]
                if len(cursos) > 0:
                    for curso in cursos:
                        cursoObj = {}
                        cursoObj["id"]=curso[0]
                        cursoObj["nome"]=curso[1]
                        cursoObj["dscr"]=curso[2]
                        listaCursos.append(cursoObj)
                    return jsonify(listaCursos)
                else:
                    return{"message":"Sem permissão"},500
            else:
                return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500
    
@curso_routes.route("/api/v1/curso", methods=['POST'])
@cross_origin()
def save():
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                if request.json and "curso" in request.json:
                    curso = request.json["curso"]
                    cursoDAO.save(curso)
                    return {"message":"Curso salvo com sucesso"}, 200
                else:
                    return {"message":"O campo curso está vazio"}, 500
            else:
                return {"message":"Sem permissão"},500
        else:
            return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500

@curso_routes.route("/api/v1/curso", methods=["PUT"])
def update_curso():
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                    if request.json and "curso" in request.json:
                        curso = request.json["curso"]
                        cursoDAO.update(curso)
                        return {"message":"Curso atualizado com sucesso"}, 200
                    else:
                        return {"message":"O campo curso está vazio"}, 500
            else:
                    return {"message":"Sem permissão"},500
        else:
                return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500

@curso_routes.route("/api/v1/curso/<string:id>", methods=['DELETE'])
@cross_origin()
def remove(id):
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                retorno = cursoDAO.remove(id)
                if retorno == 0:
                    return {"message":"O curso não foi removido"},500
                return {"message":"Curso removido com sucesso"},200
            else:
                return {"message":"Sem permissão"},500
        else:
            return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500

