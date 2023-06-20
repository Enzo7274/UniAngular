import { Component } from '@angular/core';
import { Curso } from '../models/curso.model';
import { CursoService } from '../services/curso.service';
import { Disciplina } from '../models/disciplina.model';
import { DisciplinaService } from '../services/disciplina.service';
import { Sala } from '../models/sala.model';
import { SalaService } from '../services/sala.service';
import { AppComponent } from '../app.component';

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

  discp: number[] = [];
  discpStr = "";

  onSelect(curso: Curso): void {
    // altera o curso selecionado
    this.cursoEscolhido = curso;
    var string = (this.cursoEscolhido.dscr);
      //const array = string.replace(/['"]+/g, '');
      let array: string[] = [];
      array = this.cursoEscolhido.dscr.split(",");
      this.discp = [];
      for (let i = 0; i<array.length;i++){
        this.discp.push(parseInt(array[i]));  
      }
      this.atualizarCursos();


      
  }

  atualizarCursos() {
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
      }, error => {
      console.log(error)
      return Promise.resolve(false);
    })
    }

    atualizarDisciplinas() {
    this.disciplinaService.getDisciplinas().subscribe(disciplinas => {
      this.disciplinas = disciplinas;
      }, error => {
      console.log(error)
      return Promise.resolve(false);
    })
    }

    atualizarSalas() {
    this.salasService.getSalas().subscribe(salas => {
      this.salas = salas;
      }, error => {
      console.log(error)
      return Promise.resolve(false);
    })
    }
    
  constructor(private cursoService: CursoService, private disciplinaService: DisciplinaService, private salasService: SalaService) {}

  ngOnInit(): void {
    this.atualizarCursos();
    this.atualizarDisciplinas();
    this.atualizarSalas();



  }
}