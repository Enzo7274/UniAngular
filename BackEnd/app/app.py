from flask import Flask
from app.modules.contato.contato_routes import contato_routes
from app.modules.login.login_routes import login_routes

app = Flask(__name__)

app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False
app.register_blueprint(contato_routes)
app.register_blueprint(login_routes)