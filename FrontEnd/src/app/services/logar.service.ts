import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogarService {
  
  private logarUrl = 'http://localhost:5000/api/v1/login'
  
  private headers = new HttpHeaders({"Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.Ue5joo82jsdV3GG8-UZFNeuLo9UMW5CBi3A3F9MJq9M"})
  
  constructor(private http: HttpClient) { }

  getToken(): Observable<Login[]> {
  return this.http.post<Login[]>(`${this.logarUrl}`, { "headers": this.headers })
      
  }

  getContatoById(id: number): Observable<Contato> {
  return this.http.get<Contato>(`${this.contatosUrl}/${id}`, { "headers": this.headers })
  .pipe(map(contato => {
  return contato;
  }));
  }
  addContato(contatoParam: Contato) {
  let contatoComoJson = {"contato":JSON.stringify(contatoParam)};
  this.http.post<any>(`${this.contatosUrl}`, contatoComoJson, { "headers": this.headers })
  .subscribe({
  next: data => {
  return data;
  },
  error: error => {
  console.error('Houve um erro:', error);
  }
  });
  }
  editContato(contatoParam: Contato){
  let contatoComoJson = {"contato":JSON.stringify(contatoParam)};
  return this.http.put<any>(`${this.contatosUrl}`, contatoComoJson, { "headers": this.headers })
  .subscribe({
  next: data => {
  return data;
  },
  error: error => {
  console.error('Houve um erro:', error);
  }
  });
  }
  removeContato(id: number){
  this.http.delete<any>(`${this.contatosUrl}/${id}`, {"headers": this.headers})
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