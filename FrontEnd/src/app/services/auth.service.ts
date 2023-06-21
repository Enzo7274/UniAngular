import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:5000/api/v1/login';
  public user: Observable<User> = new Observable<User>();
  private headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'})
  constructor(private http: HttpClient, private sessionService: SessionService) {}
  login(userParam: { username: any; password?: string | null | undefined; }){
  if (!this.isLoggedIn()) {
  this.http.post<any>(`${this.loginUrl}`,
 JSON.stringify({"username":userParam.username,"password":userParam.password}),{"headers": this.headers})
  .subscribe({
  next: data => {
  if(data.token){
  let user = new User(userParam.username, data.token);
  this.sessionService.create(user);
  }
  },
  error: error => {
  console.error('Houve um erro:', error);
  }
  });
  }
  }
  isLoggedIn(): boolean {
  if(this.sessionService.loggedUser() != null){
  return true;
  }
  return false;
  }
  logout() {
  this.sessionService.clear();
  }
 }