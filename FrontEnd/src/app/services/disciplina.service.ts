import { Injectable } from '@angular/core';
import { Disciplina } from '../models/disciplina.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private disciplinasUrl = 'http://localhost:5000/api/v1/disciplinas';
  
  private headers = new HttpHeaders({"Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.Ue5joo82jsdV3GG8-UZFNeuLo9UMW5CBi3A3F9MJq9M"})

  constructor(private http: HttpClient) { }
  getDisciplinas(): Observable<Disciplina[]> {
  return this.http.get<Disciplina[]>(`${this.disciplinasUrl}`, { "headers": this.headers })
  .pipe(map(disciplina => {
  return disciplina;
   }));
  }
  
}
