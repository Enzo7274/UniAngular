export class Curso {
    id: number;
    nome: string;
    descr: string;
    discp: any;

    constructor(id: number, nome: string, email: string, discp: any){
    this.id = id;
    this.nome = nome;
    this.descr = email;
    this.discp = discp;
    }
   }