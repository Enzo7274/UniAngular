from app.modules.disciplina.disciplina_service import DisciplinaService
from app.utils.security import jwtDecode
from flask import abort, Blueprint, jsonify, request, Response
from flask_cors import CORS, cross_origin
import requests
import json
disciplina_routes = Blueprint("disciplina")