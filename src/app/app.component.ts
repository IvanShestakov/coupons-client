import { Component } from '@angular/core';
import { Router } from '@angular/router';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(
  private router: Router) { }

  logout() {
    // don't forget to remove to auth token/user
    this.router.navigate(['']);
  }
}