from app.modules.usuario.usuario_service import UsuarioService
from app.utils.security import jwtDecode
from flask import abort, Blueprint, jsonify, request, Response
from flask_cors import CORS, cross_origin
import requests
import json

usuario_routes = Blueprint("usuario", __name__)
usuarioDAO = UsuarioService()

@usuario_routes.route("/api/v1/usuario/<string:id>", methods=['GET'])
@cross_origin()
def get_usuario(id):
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                usuario = usuarioDAO.getUsuario(id)
                if usuario != None:
                    usuarioObj = {}
                    usuarioObj["id"]=usuario[0]
                    usuarioObj["email"]=usuario[1]
                    usuarioObj["nome"]=usuario[2]
                    usuarioObj["login"]=usuario[3]
                    usuarioObj["senha"]=usuario[4]
                    return jsonify(usuarioObj)
                return {"message":"Usuário não localizado"},500
            else:
                return {"message":"Sem permissão"},500
        else:
            return {"message":"Sem permissão"},500
    except Exception as e:
        return{"message":str(e)},500

@usuario_routes.route("/api/v1/usuarios", methods=['GET'])
@cross_origin()
def get_usuarios():
    try:
        if'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                usuarios = usuarioDAO.getUsuarios()
                listaUsuarios=[]
                if len(usuarios) > 0:
                    for usuario in usuarios:
                        usuarioObj = {}
                        usuarioObj["id"]=usuario[0]
                        usuarioObj["email"]=usuario[1]
                        usuarioObj["nome"]=usuario[2]
                        usuarioObj["login"]=usuario[3]
                        usuarioObj["senha"]=usuario[4]
                        listaUsuarios.append(usuarioObj)
                    return jsonify(listaUsuarios)
                else:
                    return{"message":"Sem permissão"},500
            else:
                return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500
    
@usuario_routes.route("/api/v1/usuario", methods=['POST'])
@cross_origin()
def save():
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                if request.json and "usuario" in request.json:
                    usuario = request.json["usuario"]
                    usuarioDAO.save(usuario)
                    return {"message":"Usuário salvo com sucesso"}, 200
                else:
                    return {"message":"O campo usuário está vazio"}, 500
            else:
                return {"message":"Sem permissão"},500
        else:
            return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500

@usuario_routes.route("/api/v1/usuario", methods=["PUT"])
def update_usuario():
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                    if request.json and "usuario" in request.json:
                        usuario = request.json["usuario"]
                        usuarioDAO.update(usuario)
                        return {"message":"Usuário atualizado com sucesso"}, 200
                    else:
                        return {"message":"O campo usuário está vazio"}, 500
            else:
                    return {"message":"Sem permissão"},500
        else:
                return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500

@usuario_routes.route("/api/v1/usuario/<string:id>", methods=['DELETE'])
@cross_origin()
def remove(id):
    try:
        if 'Authorization' in request.headers:
            decoded_token = jwtDecode(request.headers['Authorization'])
            if('username' in decoded_token):
                retorno = usuarioDAO.remove(id)
                if retorno == 0:
                    return {"message":"O usuário não foi removido"},500
                return {"message":"Usuário removido com sucesso"},200
            else:
                return {"message":"Sem permissão"},500
        else:
            return {"message":"Sem permissão"},500
    except Exception as e:
        return {"message":str(e)},500

