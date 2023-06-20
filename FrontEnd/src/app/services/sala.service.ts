import { Injectable } from '@angular/core';
import { Sala } from '../models/sala.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  private salasUrl = 'http://localhost:5000/api/v1/salas';
  private salaUrl = 'http://localhost:5000/api/v1/sala';
  
  private headers = new HttpHeaders({"Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.Ue5joo82jsdV3GG8-UZFNeuLo9UMW5CBi3A3F9MJq9M"})

  constructor(private http: HttpClient) { }

  getSalas(): Observable<Sala[]> {
  return this.http.get<Sala[]>(`${this.salasUrl}`, { "headers": this.headers })
  .pipe(map(Salas => {
  return Salas;
   }));

  }

  addSala(SalaParam: Sala) {
    let SalaComoJson = {"sala":SalaParam};
    this.http.post<any>(`${this.salaUrl}`, SalaComoJson, { "headers": this.headers })
    .subscribe({
    next: data => {
    return data;
    },
    error: error => {
    console.error('Houve um erro:', error);
    }
    });
    }

  editSala(SalaParam: Sala){
    let SalaComoJson = {"sala":SalaParam};
    return this.http.put<any>(`${this.salaUrl}`, SalaComoJson, { "headers": this.headers })
    .subscribe({
    next: data => {
    return data;
    },
    error: error => {
    console.error('Houve um erro:', error);
    }
    });
    }
   
  removeSala(id: number){
    this.http.delete<any>(`${this.salaUrl}/${id}`, {"headers": this.headers})
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
