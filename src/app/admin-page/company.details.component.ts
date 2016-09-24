import { Component } from '@angular/core';

//Decided not to export html template to separate file here.
@Component({
  template: `
      <div *ngIf="company">
      <h2>{{company.name}} details!</h2>
      <div>
        <label>id: </label>{{company.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="company.name" placeholder="name" />
       </div>
      <button (click)="goBack()">Back</button>
      <button (click)="save()">Save</button>
    </div>
  `,
  styleUrls: ['./company.details.component.css']
})
export class CompanyDetailsComponent { }