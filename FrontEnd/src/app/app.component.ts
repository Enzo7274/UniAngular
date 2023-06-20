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

  constructor(private cursoService: CursoService, private disciplinaService: DisciplinaService, private salaService: SalaService, private usuarioService: UsuarioService) {}

  atualizarCursos() {
    this.cursoService.getCursos().subscribe(cursos => {
      return cursos;
      }, error => {
      console.log(error)
      return Promise.resolve(false);
    })
    }

    atualizarDisciplinas() {
    this.disciplinaService.getDisciplinas().subscribe(disciplinas => {
      return disciplinas;
      }, error => {
      console.log(error)
      return Promise.resolve(false);
    })
    }

    atualizarSalas() {
    this.salaService.getSalas().subscribe(salas => {
      return salas;
      }, error => {
      console.log(error)
      return Promise.resolve(false);
    })
    }

    atualizarUsuarios() {
      this.usuarioService.getUsuarios().subscribe(usuarios => {
        return usuarios;
        }, error => {
        console.log(error)
        return Promise.resolve(false);
      })
      }
}
