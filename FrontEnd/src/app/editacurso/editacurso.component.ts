import { Component } from '@angular/core';
import { Curso } from '../models/curso.model';
import { CursoService } from '../services/curso.service';
import { Disciplina } from '../models/disciplina.model';
import { DisciplinaService } from '../services/disciplina.service';
import { Sala } from '../models/sala.model';
import { SalaService } from '../services/sala.service';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editacurso',
  templateUrl: './editacurso.component.html',
  styleUrls: ['./editacurso.component.css']
})

export class EditacursoComponent {
  cursos: any[] = [];
  disciplinas: any[] = [];
  salas: any[] = [];
  usuarios: any[] = [];

  cursoEscolhido?: Curso;
  disciplinaEscolhida?: Disciplina;
  salaEscolhida?: Sala;
  usuarioEscolhido?: Usuario;

  exibirOpcoesCurso = false;
  exibirOpcoesDisciplina = false;
  exibirOpcoesSala = false;
  exibirOpcoesUsuario = false;
  

  onSelectCurso(curso: Curso): void {
    // altera o curso selecionado
    this.cursoEscolhido = curso;
    this.exibirOpcoesCurso = false;
  }

  onSelectDisciplina(disciplina: Disciplina): void {
    // altera a disciplina selecionada
    this.disciplinaEscolhida = disciplina;
    this.exibirOpcoesDisciplina = false;
  }
  
  onSelectSala(sala: Sala): void {
    // altera a sala selecionada
    this.salaEscolhida = sala;
    this.exibirOpcoesSala = false;
  }

  onSelectUsuario(usuario: Usuario): void {
    // altera o usuario selecionado
    this.usuarioEscolhido = usuario;
    this.exibirOpcoesUsuario = false;
  }

  onClicarAdicionarCurso(): void {
    this.exibirOpcoesCurso = true;
  }


  

  constructor(private cursoService: CursoService, private disciplinaService: DisciplinaService, private salasService: SalaService, private usuariosService: UsuarioService) {

    
  }

  onAdicionarCurso() {
    const input = document.getElementById("campo-nome-curso") as HTMLInputElement;
    
    const nomeCurso = input!.value
    
    const input2 = document.getElementById("campo-dscr-curso") as HTMLInputElement;
    
    const dscrCurso = input2!.value
    
    let cursoArr = [];
    cursoArr.push(nomeCurso);
    cursoArr.push(dscrCurso);
    
    
    let curso = Object.assign(Array.from(cursoArr))   
    

  this.cursoService.addCurso(curso).subscribe(curso => this.cursos.push(curso));
    
  }

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

    this.usuariosService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
      }, error => {
      console.log(error)
      return Promise.resolve(false);
    })

  }

    onEditarCurso(id: number) {
      // altera o curso selecionado
      //this.router.navigateByUrl('/curso/edit', {state: { idCurso: id }})
    }
  
    onRemoverCurso(id: number) {
      this.cursoService.removeCurso(id);
      //this.router.navigateByUrl('/curso/list');
      }
  }


