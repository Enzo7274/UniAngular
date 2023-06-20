import { Component } from '@angular/core';
import { Curso } from '../models/curso.model';
import { Cursos } from '../lista-cursos';
import { Disciplina } from '../models/disciplina.model';
import { Disciplinas } from '../lista-disciplinas';
import { Sala } from '../models/sala.model';
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
