import { Component } from '@angular/core';
import { Curso } from '../models/curso.model';
import { CursoService } from '../services/curso.service';
import { Disciplina } from '../models/disciplina.model';
import { DisciplinaService } from '../services/disciplina.service';
import { Sala } from '../models/sala.model';
import { SalaService } from '../services/sala.service';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service';

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
  
  senhasConferem = true;

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


  

  constructor(private cursoService: CursoService, private disciplinaService: DisciplinaService, private salaService: SalaService, private usuarioService: UsuarioService) {

    
  }

  ///////////Operações de Cursos//////////////////////////////////////////////////////////////////////

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
      id: 0
    }

    //enviar objeto
    this.cursoService.addCurso(novoCurso)//.subscribe(curso => this.cursos.push(curso));
    
    //atualizar lista de cursos
    this.atualizarCursos();

    //fechar opções do menu
    this.cursoEscolhido = undefined;

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
    }

    console.log(novoCurso);
    //enviar objeto
    this.cursoService.editCurso(novoCurso)//.subscribe(curso => this.cursos.push(curso));
   
    //atualizar lista de cursos
    this.atualizarCursos();

    //fechar opções do menu
    this.cursoEscolhido = undefined;

  }
  
  onRemoverCurso(id: number) {     
    //remover curso pela id.
    this.cursoService.removeCurso(id);
    //atualizar lista de cursos
    this.atualizarCursos();
    //fechar opções do menu
    this.cursoEscolhido = undefined;
  }

  ///////////Operações de Disciplinas//////////////////////////////////////////////////////////////////////
  onAdicionarDisciplina() {
    //pegar valores do form de disciplinas
    const input = document.getElementById("campo-nome-disciplina") as HTMLInputElement;
    const input2 = document.getElementById("campo-dscr-disciplina") as HTMLInputElement;
    const input3 = document.getElementById("campo-curso-disciplina") as HTMLInputElement;
    const input4 = document.getElementById("campo-sala-disciplina") as HTMLInputElement;
    const nomeDisciplina = input!.value
    const dscrDisciplina = input2!.value
    const cursoDisciplina = input3!.value

    let salaNum: string = input3!.value;
    let salaDisciplina: number = salaNum as unknown as number;
    
    //criar objeto
    const novaDisciplina = {
      nome: nomeDisciplina,
      dscr: dscrDisciplina,
      curso: cursoDisciplina,
      sala: salaDisciplina,
      id: 0
    }

    //enviar objeto disciplina
    this.disciplinaService.addDisciplina(novaDisciplina)//.subscribe(curso => this.cursos.push(curso));
    
    //atualizar lista de disciplinas
    this.atualizarDisciplinas();

    //fechar opções do menu de disciplinas
    this.disciplinaEscolhida = undefined;

  }

  onEditarDisciplina() {
    //pegar valores da disciplina para editar
    const input = document.getElementById("campo-nome-disciplina") as HTMLInputElement;
    const input2 = document.getElementById("campo-dscr-disciplina") as HTMLInputElement;
    const input3 = document.getElementById("campo-curso-disciplina") as HTMLInputElement;
    const input4 = document.getElementById("campo-sala-disciplina") as HTMLInputElement;
    const nomeDisciplina = input!.value
    const dscrDisciplina = input2!.value
    const cursoDisciplina = input3!.value
    const idDisciplina = this.disciplinaEscolhida?.id || 0;

    let salaNum: string = input4!.value;
    let salaDisciplina: number = salaNum as unknown as number;
    
    //criar objeto
    const novaDisciplina = {
      nome: nomeDisciplina,
      dscr: dscrDisciplina,
      curso: cursoDisciplina,
      sala: salaDisciplina,
      id: idDisciplina
    }

    //enviar objeto disciplina com as alterações feitas
    this.disciplinaService.editDisciplina(novaDisciplina)//.subscribe(curso => this.cursos.push(curso));
   
    //atualizar lista de disciplinas
    this.atualizarDisciplinas();

    //fechar opções do menu de disciplinas
    this.disciplinaEscolhida = undefined;

  }
  
  onRemoverDisciplina(id: number) {     
    //remover disciplina pela id.
    this.disciplinaService.removeDisciplina(id);
    //atualizar lista de disciplinas
    this.atualizarDisciplinas();
    //fechar opções do menu de disciplinas
    this.disciplinaEscolhida = undefined;
  }
  ///////////Operações de Salas//////////////////////////////////////////////////////////////////////
  onAdicionarSala() {
    //pegar valores do form de salas
    const input = document.getElementById("campo-nome-sala") as HTMLInputElement;
    const input2 = document.getElementById("campo-andar-sala") as HTMLInputElement;    
    let salaNum: string = input!.value;
    let numeroSala: number = salaNum as unknown as number;
    let andarNum: string = input2!.value;
    let andarSala: number = andarNum as unknown as number;
    
    //criar objeto
    const novaSala = {
      numSala: numeroSala,
      andar: andarSala,
      id: 0
    }

    //enviar novo objeto sala
    this.salaService.addSala(novaSala)//.subscribe(curso => this.cursos.push(curso));
    
    //atualizar lista de salas
    this.atualizarSalas();

    //fechar opções do menu de salas
    this.salaEscolhida = undefined;

  }

  onEditarSala() {
    //pegar valores da sala para editar
    const input = document.getElementById("campo-nome-sala") as HTMLInputElement;
    const input2 = document.getElementById("campo-andar-sala") as HTMLInputElement;    
    let salaNum: string = input!.value;
    let numeroSala: number = salaNum as unknown as number;
    let andarNum: string = input2!.value;
    let andarSala: number = andarNum as unknown as number;
    const idSala = this.salaEscolhida?.id || 0;
    
    //criar objeto
    const novaSala = {
      numSala: numeroSala,
      andar: andarSala,
      id: idSala
    }

    //enviar objeto sala com as alterações feitas
    this.salaService.editSala(novaSala)//.subscribe(curso => this.cursos.push(curso));
   
    //atualizar lista de salas
    this.atualizarSalas();

    //fechar opções do menu de salas
    this.salaEscolhida = undefined;

  }
  
  onRemoverSala(id: number) {     
    //remover sala pela id.
    this.salaService.removeSala(id);
    //atualizar lista de salas
    this.atualizarSalas();
    //fechar opções do menu de salas
    this.salaEscolhida = undefined;
  }
  ///////////Operações de Usuários//////////////////////////////////////////////////////////////////////
  onAdicionarUsuario() {
    //pegar valores do form de usuário
    const input = document.getElementById("campo-nome-usuario") as HTMLInputElement;
    const input2 = document.getElementById("campo-email-usuario") as HTMLInputElement;
    const input3 = document.getElementById("campo-login-usuario") as HTMLInputElement;
    const input4 = document.getElementById("campo-senha-usuario") as HTMLInputElement;
    const input5 = document.getElementById("campo-reinserir-senha-usuario") as HTMLInputElement;
    const nomeUsuario = input!.value
    const emailUsuario = input2!.value
    const loginUsuario = input3!.value
    const senhaUsuario = input4!.value
    const reinserirSenhaUsuario = input5!.value

    //validar senha
    
    if (senhaUsuario !== reinserirSenhaUsuario) {this.senhasConferem = false} else {this.senhasConferem = true}
    console.log(this.senhasConferem);
    
    if (this.senhasConferem == true) {
      //criar objeto
      const novoUsuario = {
        nome: nomeUsuario,
        email: emailUsuario,
        login: loginUsuario,
        senha: senhaUsuario,
        id: 0
      }
  
      //enviar novo objeto usuario
      this.usuarioService.addUsuario(novoUsuario)//.subscribe(curso => this.cursos.push(curso));
      
      //atualizar lista de usuarios
      this.atualizarUsuarios();
  
      //fechar opções do menu de usuarios
      this.usuarioEscolhido = undefined;
    }
  }

  onEditarUsuario() {
    //pegar valores do usuario para editar
    const input = document.getElementById("campo-nome-usuario") as HTMLInputElement;
    const input2 = document.getElementById("campo-email-usuario") as HTMLInputElement;
    const input3 = document.getElementById("campo-login-usuario") as HTMLInputElement;
    const input4 = document.getElementById("campo-senha-usuario") as HTMLInputElement;
    const nomeUsuario = input!.value
    const emailUsuario = input2!.value
    const loginUsuario = input3!.value
    const senhaUsuario = input4!.value
    const idUsuario = this.usuarioEscolhido?.id || 0;
    
    //criar objeto
    const novoUsuario = {
      nome: nomeUsuario,
      email: emailUsuario,
      login: loginUsuario,
      senha: senhaUsuario,
      id: idUsuario
    }

    //enviar objeto usuario com as alterações feitas
    this.usuarioService.editUsuario(novoUsuario)//.subscribe(curso => this.cursos.push(curso));
    
    //atualizar lista de usuarios
    this.atualizarUsuarios();

    //fechar opções do menu do usuario
    this.usuarioEscolhido = undefined;
    
  }
  
  
  onRemoverUsuario(id: number) {     
    //remover usuario pela id.
    this.usuarioService.removeUsuario(id);
    //atualizar lista de usuarios
    this.atualizarUsuarios();
    //fechar opções do menu de usuarios
    this.usuarioEscolhido = undefined;
  }
  ///////////Etc. //////////////////////////////////////////////////////////////////////

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
      this.salaService.getSalas().subscribe(salas => {
        this.salas = salas;
        }, error => {
        console.log(error)
        return Promise.resolve(false);
      })
    }

    atualizarUsuarios() {
      this.usuarioService.getUsuarios().subscribe(usuarios => {
        this.usuarios = usuarios;
        }, error => {
        console.log(error)
        return Promise.resolve(false);
      })
    }

  ngOnInit(): void {

    this.atualizarCursos();
    this.atualizarDisciplinas();
    this.atualizarSalas();
    this.atualizarUsuarios();

  }
  

  }


