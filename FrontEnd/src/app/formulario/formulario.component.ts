import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  usuarioLogado = "false";

  aoClicarLogin(){
   this.usuarioLogado = "true";
   
  }

  aoClicarSair(){
    this.usuarioLogado = "false";
   }

  aoClicarDashboard(){
    alert("ô o tumalakakkkkkkkkkkkkkk");
  }

  aoClicarEditarCursos(){
    alert("eita preula. não programei isso ainda");
  }
}
