from flask import Flask
from app.modules.usuario.usuario_routes import usuario_routes
from app.modules.login.login_routes import login_routes

app = Flask(__name__)

app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False
app.register_blueprint(usuario_routes)
app.register_blueprint(login_routes)