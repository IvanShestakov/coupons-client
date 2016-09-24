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
  //Debugging
  msg = ""
  constructor( private authService: AuthenticationService,
              private router: Router) {}

  onSubmit(user: User) { 
    this.authService.login(this.user).subscribe((result) => {
      if (result) {
        this.router.navigate([user.type.toString().toLowerCase()])
      }
      this.msg = "Failed to login";
    });
   }

  types =  Object.keys(userType);

 }