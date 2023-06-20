import { Component } from '@angular/core';
import { Curso } from '../models/curso.model';
import { CursoService } from '../services/curso.service';
import { Disciplina } from '../models/disciplina.model';
import { DisciplinaService } from '../services/disciplina.service';
import { Sala } from '../models/sala.model';
import { SalaService } from '../services/sala.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
 
  cursos: any[] = [];
  disciplinas: any[] = [];
  salas: any[] = [];

  cursoEscolhido?: Curso;

  onSelect(curso: Curso): void {
    // altera o curso selecionado
    this.cursoEscolhido = curso;
    var string = (this.cursoEscolhido.dscr);
      const array = string.replace(/['"]+/g, '');
      this.cursoEscolhido.discp = array;
    console.log(this.cursoEscolhido.discp);
  }

  constructor(private cursoService: CursoService, private disciplinaService: DisciplinaService, private salasService: SalaService) {}

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
      }, error => {
      console.log(error)
      return Promise.resolve(false);
    })

    this.disciplinaService.getDisciplinas().subscribe(disciplinas => {
      this.disciplinas = disciplinas;
      }, error => {
      console.log(error)
      return Promise.resolve(false);
    })

    this.salasService.getSalas().subscribe(salas => {
      this.salas = salas;
      }, error => {
      console.log(error)
      return Promise.resolve(false);
    })
  }
}