import { Injectable } from '@angular/core';
import { Curso } from '../models/curso.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { last } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursosUrl = 'http://localhost:5000/api/v1/cursos';
  private cursoUrl = 'http://localhost:5000/api/v1/curso';
  
  private headers = new HttpHeaders({"Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.Ue5joo82jsdV3GG8-UZFNeuLo9UMW5CBi3A3F9MJq9M"})

  constructor(private http: HttpClient) { }

  getCursos(): Observable<Curso[]> {
  return this.http.get<Curso[]>(`${this.cursosUrl}`, { "headers": this.headers })
  .pipe(map(cursos => {
  return cursos;
   }));

  }

  addCurso(cursoParam: Curso) {
    let cursoComoJson = {"curso":cursoParam};
    this.http.post<any>(`${this.cursoUrl}`, cursoComoJson, { "headers": this.headers })
    .subscribe({
    next: data => {
    return data;
    },
    error: error => {
    console.error('Houve um erro:', error);
    }
    });
    }

  editCurso(cursoParam: Curso){
    let cursoComoJson = {"curso":cursoParam};
    return this.http.put<any>(`${this.cursoUrl}`, cursoComoJson, { "headers": this.headers })
    .subscribe({
    next: data => {
    return data;
    },
    error: error => {
    console.error('Houve um erro:', error);
    }
    });
    }
   
  removeCurso(id: number){
    this.http.delete<any>(`${this.cursoUrl}/${id}`, {"headers": this.headers})
    .subscribe({
    next: data => {
    return data;
    },
    
    error: error => {
    console.error('Houve um erro:', error);
    }
    });
    }

}
