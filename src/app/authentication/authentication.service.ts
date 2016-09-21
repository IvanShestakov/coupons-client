import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';
import { User } from '../shared/user';

@Injectable()
export class AuthenticationService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_user');
  }

  login(user: User) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        'webapi/login', 
        JSON.stringify( user ), 
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_user', JSON.stringify({ user }));
          this.loggedIn = true;
        }

        return res.success;
      });
  }
  
  logout() {
    localStorage.removeItem('auth_user');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}