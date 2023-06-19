from app.modules.sala.sala_service import SalaService
from app.utils.security import jwtDecode
from flask import abort, Blueprint, jsonify, request, Response
from flask_cors import CORS, cross_origin
import requests
import json

sala_routes = Blueprint("sala", __name__)
salaDAO = SalaService()

@sala_routes.route("/api/v1/sala/<string:id>")
@cross_origin()
def get_sala(id):
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                sala = salaDAO.getSala(id)
                if sala != None:
                    salaObj = {}
                    salaObj["id"]=sala[0]
                    salaObj["numSala"]=sala[1]
                    salaObj["andar"]=sala[2]
                    return jsonify(salaObj)
                return {"message":"Sala não localizado"},500
            else:
                return {"message":"Sem permissão"},500
        else:
            return {"message":"Sem permissão"},500
    except Exception as e:
        return{"message":str(e)},500

@sala_routes.route("/api/v1/salas")
@cross_origin()
def get_salas():
    try:
        if'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                salas = salaDAO.getSalas()
                listaSalas=[]
                if len(salas) > 0:
                    for sala in salas:
                        salaObj = {}
                        salaObj["id"]=sala[0]
                        salaObj["numSala"]=sala[1]
                        salaObj["andar"]=sala[2]
                        listaSalas.append(salaObj)
                    return jsonify(listaSalas)
                else:
                    return{"message":"Sem permissão"},500
            else:
                return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500
    
@sala_routes.route("/api/v1/sala", methods=['POST'])
@cross_origin()
def save():
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                if request.json and "sala" in request.json:
                    sala = request.json["sala"]
                    salaDAO.save(sala)
                    return {"message":"Sala salvo com sucesso"}, 200
                else:
                    return {"message":"O campo sala está vazio"}, 500
            else:
                return {"message":"Sem permissão"},500
        else:
            return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500

@sala_routes.route("/api/v1/sala", methods=["PUT"])
def update_sala():
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                    if request.json and "sala" in request.json:
                        sala = request.json["sala"]
                        salaDAO.update(sala)
                        return {"message":"Sala atualizado com sucesso"}, 200
                    else:
                        return {"message":"O campo sala está vazio"}, 500
            else:
                    return {"message":"Sem permissão"},500
        else:
                return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500

@sala_routes.route("/api/v1/sala/<string:id>", methods=['DELETE'])
@cross_origin()
def remove(id):
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                retorno = salaDAO.remove(id)
                if retorno == 0:
                    return {"message":"O sala não foi removido"},500
                return {"message":"Sala removido com sucesso"},200
            else:
                return {"message":"Sem permissão"},500
        else:
            return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500

