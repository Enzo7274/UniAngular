import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuariosUrl = 'http://localhost:5000/api/v1/usuarios';
  private usuarioUrl = 'http://localhost:5000/api/v1/login';
  
  private headers = new HttpHeaders({'Content-Type':'application/json'}); 

  constructor(private http: HttpClient, ) { }

      getTokenConsole(UsuarioParam: User) {
        return this.http.post<any>(this.usuarioUrl, UsuarioParam, {"headers": this.headers,}).subscribe((data) => { console.log(data); }, (error) => { console.error(error); });
      }

      getToken(UsuarioParam: User) {
        this.http.post<any>(`${this.usuarioUrl}`, UsuarioParam, { "headers": this.headers, observe: 'response' }).pipe(map(data => {})).subscribe(result => {
          console.log(result);
          
        })


        
        
      }
}
