import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';
import { User } from '../shared/user';

import { Observable } from 'rxjs'

@Injectable()
export class AuthenticationService {
  private loggedIn = false;
  private serverURL = 'http://localhost:8080/coupon-management/';
  private loginPath = 'webapi/login';
  private logoutPath = 'webapi/logout';

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_user');
  }

  login(user: User) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
      this.serverURL.concat(this.loginPath),
      JSON.stringify(user),
      { headers })
      .map((res) => {
        if (res.status = 204) {
          localStorage.setItem('auth_user', JSON.stringify({ user }));
          this.loggedIn = true;
          return true;
        }
        else return false;
      });
  }
  
  logout() {
    this.http
    .post(
      this.serverURL.concat(this.logoutPath),
      {});
    localStorage.removeItem('auth_user');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}