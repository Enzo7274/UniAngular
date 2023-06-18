import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  cursos = [{
      "id": 1,
      "nome": "Análise e Desenvolvimento de Sistemas",
      "descr": "Técnologo como Pedreiro Digital",
      "discp": [1, 2]
    },
    {
      "id": 2,
      "nome": "Engenharia de Computação",
      "descr": "Mestre de Obras Digital",
      "discp": [2]
    },
  ];

  disciplinas = [{
      "id": 1,
      "nome": "Tecnologias da Web",
      "sala": "15"
    },
    {
      "id": 2,
      "nome": "Programação Orientada a Objetos",
      "sala": "26"
    },
 ];
  salas = [{
      "id": 1,
      "numero": "15",
      "andar": "2"
    },
    {
      "id": 2,
      "numero": "26",
      "andar": "3"
    },
  ];

  cursoSelecionado = "";
  idCursoSelecionado = 0;
  listaDisciplinas = [];

  onChangeList(event: any) {
    this.cursoSelecionado = (<HTMLSelectElement>event.target).value;
    this.idCursoSelecionado = (<HTMLSelectElement>event.target).selectedIndex;
    let totalDiscp = this.cursos.indexOf;
    console.log(totalDiscp);
    //for (i=0;i<)
    //this.listaDisciplinas
  }
}
