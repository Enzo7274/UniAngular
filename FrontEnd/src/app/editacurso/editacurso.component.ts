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
import { lastValueFrom } from 'rxjs';

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
    //pegar valores
    const input = document.getElementById("campo-nome-curso") as HTMLInputElement;
    const input2 = document.getElementById("campo-dscr-curso") as HTMLInputElement;
    const nomeCurso = input!.value
    const dscrCurso = input2!.value
    
    //criar objeto
    const novoCurso = {
      nome: nomeCurso,
      dscr: dscrCurso,
      discp: 0,
      id: 0
    }

    //enviar objeto
    this.cursoService.addCurso(novoCurso)//.subscribe(curso => this.cursos.push(curso));
    
    //atualizar lista de cursos
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
      }, error => {
      console.log(error)
      return Promise.resolve(false);
    })

  }

  onEditarCurso() {
    //pegar valores para editar
    const input = document.getElementById("campo-nome-curso") as HTMLInputElement;
    const input2 = document.getElementById("campo-dscr-curso") as HTMLInputElement;
    const input3 = document.getElementById("campo-id-curso") as HTMLInputElement;
    const nomeCurso = input!.value
    const dscrCurso = input2!.value
    const idCurso = this.cursoEscolhido?.id || 0;
    
    //criar objeto
    const novoCurso = {
      nome: nomeCurso,
      dscr: dscrCurso,
      id: idCurso,
      discp: ""
    }

    console.log(novoCurso);
    //enviar objeto
    this.cursoService.editCurso(novoCurso)//.subscribe(curso => this.cursos.push(curso));
    
    //atualizar lista de cursos
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
      }, error => {
      console.log(error)
      return Promise.resolve(false);
    })

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
  
    onRemoverCurso(id: number) {
      this.cursoService.removeCurso(id);
      //this.router.navigateByUrl('/curso/list');
      }
  }


