import { Component } from '@angular/core';
import { User, userType } from '../shared/user';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = new User();
  submitted = false;

  onSubmit() { this.submitted = true; }

  types =  Object.keys(userType);
  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.user); }

 }