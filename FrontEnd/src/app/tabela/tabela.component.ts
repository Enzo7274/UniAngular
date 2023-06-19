import { Component } from '@angular/core';
import { Curso } from '../curso';
import { Cursos } from '../lista-cursos';
import { Disciplina } from '../disciplina';
import { Disciplinas } from '../lista-disciplinas';
import { Sala } from '../sala';
import { Salas } from '../lista-salas';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
 
  cursos = Cursos;
  cursoEscolhido?: Curso;
  disciplinas = Disciplinas;
  salas = Salas;

  onSelect(curso: Curso): void {
    // altera o curso selecionado
    this.cursoEscolhido = curso;
  }


}
