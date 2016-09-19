import { Component } from '@angular/core';
import { User, userType } from '../shared/user';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = new User("Admin","1234", userType.Admin);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }

  msg = "test";
 }