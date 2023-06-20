import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  aoClicarLogin(){
    
    AppComponent.logado = true;
   
  }

  aoClicarSair(){
    AppComponent.logado = false;
   }

  aoClicarDashboard(){
    alert("ô o tumalakakkkkkkkkkkkkkk");
  }

  aoClicarEditarCursos(){
    alert("eita preula. não programei isso ainda");
  }
}
