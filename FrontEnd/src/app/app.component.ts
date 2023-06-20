import { Component } from '@angular/core';
import { CursoService } from './services/curso.service';
import { Curso } from './models/curso.model';
import { DisciplinaService } from './services/disciplina.service';
import { Disciplina } from './models/disciplina.model';
import { SalaService } from './services/sala.service';
import { Sala } from './models/sala.model';
import { Usuario } from './models/usuario.model';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
  editar = false;
  static logado: boolean;
  logado = false;

  aoClicarLogin(){
    this.logado = true;
  }
}
