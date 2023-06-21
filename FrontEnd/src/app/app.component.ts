import { Component } from '@angular/core';
import { CursoService } from './services/curso.service';
import { Curso } from './models/curso.model';
import { DisciplinaService } from './services/disciplina.service';
import { Disciplina } from './models/disciplina.model';
import { SalaService } from './services/sala.service';
import { Sala } from './models/sala.model';
import { Usuario } from './models/usuario.model';
import { UsuarioService } from './services/usuario.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
  class_validate = "needs-validation";
  modoEditar = false;
  logadoComoAdmin = false;
  logado = false;
  
  token: any[] = [];
  usuarios: any[] = [];

  usuarioAtual?: Usuario;
  usuarioIdLogin = 0;

  constructor(private usuarioService: UsuarioService) {};

  onRealizarLogin() {

  
    const input = document.getElementById("campo-username") as HTMLInputElement;
    const input2 = document.getElementById("campo-password") as HTMLInputElement;
    
    const loginUsuario = input!.value
    const senhaUsuario = input2!.value

    if ((loginUsuario == "admin") && (senhaUsuario == "adminpw")) {this.logado = true; this.logadoComoAdmin=true;}
  
    const credenciais = {
    nome:  "",
    email:  "",
    login: loginUsuario,
    senha: senhaUsuario,
    id: 0
    }

    this.atualizarUsuarios();
  
    for (let i=0;i<this.usuarios.length;i++) {
     this.usuarioAtual = this.usuarios[i]; 
     if (this.usuarioAtual?.login == loginUsuario) {
        if (this.usuarioAtual?.senha == senhaUsuario) {
          this.logado = true;
          this.usuarioIdLogin = this.usuarioAtual?.id;
        }
     } 
     
    }

    
    
    
  }
  
  atualizarUsuarios() {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
      }, error => {
      console.log(error)
      return Promise.resolve(false);
    })
  }
  
}

