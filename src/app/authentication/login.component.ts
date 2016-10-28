import { Component } from '@angular/core';
import { User, userType } from '../shared/user';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = new User();
  submitted = false;
  errMsg = "";

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  onSubmit(user: User) {
    //If successfully login to server navigate to appropriate page according to user type.
    this.authService.login(this.user).subscribe(
      success => this.router.navigate([user.type.toString().toLowerCase()]),
      error => this.errMsg = <any>error);
      //Added this to hide the error message after 3 seconds.
      setTimeout(() => this.errMsg="", 3000);
  }

  types = Object.keys(userType);

}