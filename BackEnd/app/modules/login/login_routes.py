from app.modules.login.login_controller import LoginController
from app.modules.login.errors.username_invalid_error import UsernameInvalidError
from app.modules.login.errors.password_invalid_error import PasswordInvalidError
from flask import abort, Blueprint, jsonify, request, Response
from flask_cors import CORS, cross_origin
import requests
import json

login_routes = Blueprint("login", __name__)
login_controller = LoginController()

@login_routes.route("/api/v1/login", methods=['POST'])
@cross_origin()
def logar():
    try:
        json_data = request.json
        if 'username' in json_data:
            if 'password' in json_data:
                username = json_data["username"]
                password = json_data["password"]
                try:
                    return {"token":login_controller.login(username, password)}
                except UsernameInvalidError:
                    return {"message":"Nome de usuário inválido"}, 500
                except PasswordInvalidError:
                    return {"message":"Senha inválida"}, 500
            else:
                return {"message":"Campo password é obrigatório"}, 500
        else:
            return {"message":"Campo username é obrigatório"}, 500
    except Exception as e:
        return {"error": str(e)}, 500
    