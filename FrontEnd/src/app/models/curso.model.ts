export class Curso {
    id: number;
    nome: string;
    dscr: string;
    discp: any;

    constructor(id: number, nome: string, dscr: string, discp: any){
    this.id = id;
    this.nome = nome;
    this.dscr = dscr;
    this.discp = discp;
    }
}