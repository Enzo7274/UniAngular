import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosUrl = 'http://localhost:5000/api/v1/usuarios';
  private usuarioUrl = 'http://localhost:5000/api/v1/usuario';
  
  private headers = new HttpHeaders({"Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.Ue5joo82jsdV3GG8-UZFNeuLo9UMW5CBi3A3F9MJq9M"})

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(`${this.usuariosUrl}`, { "headers": this.headers })
  .pipe(map(Usuarios => {
  return Usuarios;
   }));

  }

  addUsuario(UsuarioParam: Usuario) {
    let UsuarioComoJson = {"usuario":UsuarioParam};
    this.http.post<any>(`${this.usuarioUrl}`, UsuarioComoJson, { "headers": this.headers })
    .subscribe({
    next: data => {
    return data;
    },
    error: error => {
    console.error('Houve um erro:', error);
    }
    });
    }

  editUsuario(UsuarioParam: Usuario){
    let UsuarioComoJson = {"usuario":UsuarioParam};
    return this.http.put<any>(`${this.usuarioUrl}`, UsuarioComoJson, { "headers": this.headers })
    .subscribe({
    next: data => {
    return data;
    },
    error: error => {
    console.error('Houve um erro:', error);
    }
    });
    }
   
  removeUsuario(id: number){
    this.http.delete<any>(`${this.usuarioUrl}/${id}`, {"headers": this.headers})
    .subscribe({
    next: data => {
    return data;
    },
    
    error: error => {
    console.error('Houve um erro:', error);
    }
    });
    }

  realizarLogin(UsuarioParam: Usuario) {
      let UsuarioComoJson = {"usuario":UsuarioParam};
      this.http.post<any>(`${this.usuarioUrl}`, UsuarioComoJson, { "headers": this.headers })
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
