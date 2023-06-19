from flask import Flask, render_template
from app.modules.usuario.usuario_routes import usuario_routes
from app.modules.disciplina.disciplina_routes import disciplina_routes
from app.modules.sala.sala_routes import sala_routes
from app.modules.curso.curso_routes import curso_routes
from app.modules.login.login_routes import login_routes


app = Flask(__name__, template_folder='dist/FrontEnd')

app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False
app.register_blueprint(usuario_routes)
app.register_blueprint(curso_routes)
app.register_blueprint(disciplina_routes)
app.register_blueprint(sala_routes)
app.register_blueprint(login_routes)

@app.route('/')
def templ():
    return render_template('index.html')

@app.route('/')
def js():
    return render_template('index.html')

