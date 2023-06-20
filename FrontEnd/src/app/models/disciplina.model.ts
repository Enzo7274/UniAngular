export class Disciplina {
    id: number;
    nome: string;
    descr: string;
    sala: number;

    constructor(id: number, nome: string, descr: string, sala: number){
    this.id = id;
    this.nome = nome;
    this.descr = descr;
    this.sala = sala;
    }
   }