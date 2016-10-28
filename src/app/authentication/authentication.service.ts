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
    this.loggedIn = !!sessionStorage.getItem('auth_user');
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
          let id = res.text();
          sessionStorage.setItem('auth_user', JSON.stringify({ user }));
          sessionStorage.setItem('userId', id);
          this.loggedIn = true;
        }
      })
      .catch(this.handleError);
  }
  
  logout() {
    this.http
    .post(
      this.serverURL.concat(this.logoutPath),
      {});
    sessionStorage.removeItem('auth_user');
    sessionStorage.removeItem('userId')
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  private handleError (error: Response | any) {
  // Sample error handler from Angular documentation website.
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    console.log(body);
    const err = body.error || JSON.stringify(body);
    console.log(err);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
}