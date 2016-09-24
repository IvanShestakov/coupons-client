import { Component } from '@angular/core';
import { Router } from '@angular/router';
import '../../public/css/styles.css';
import { AuthenticationService } from './authentication/authentication.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent { 
  constructor( private authService: AuthenticationService,
  private router: Router) { }

  logout() {
    // don't forget to remove to auth token/user
    this.authService.logout();
    this.router.navigate(['']);
  }
}