from app.modules.sala.sala_service import SalaService
from app.utils.security import jwtDecode
from flask import abort, Blueprint, jsonify, request, Response
from flask_cors import CORS, cross_origin
import requests
import json
sala_routes = Blueprint("sala")