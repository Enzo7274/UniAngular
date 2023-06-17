from app.modules.curso.curso_service import CursoService
from app.utils.security import jwtDecode
from flask import abort, Blueprint, jsonify, request, Response
from flask_cors import CORS, cross_origin
import requests
import json
curso_routes = Blueprint("curso")