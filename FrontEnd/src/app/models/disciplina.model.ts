export class Disciplina {
    id: number;
    nome: string;
    dscr: string;
    curso: string;
    sala: number;

    constructor(id: number, nome: string, dscr: string, curso: string, sala: number){
    this.id = id;
    this.nome = nome;
    this.dscr = dscr;
    this.curso = curso;
    this.sala = sala;
    }
   }