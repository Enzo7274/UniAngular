import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private sessionStorageService: SessionStorageService) { }

  create(user: User): User {
    this.sessionStorageService.store('loggedUser', user);
    return this.sessionStorageService.retrieve('loggedUser');
    }

    loggedUser(): User {
      let logged_user = this.sessionStorageService.retrieve('loggedUser');
      return logged_user;
      }
      clear() {
      this.sessionStorageService.clear();
      }

    }


