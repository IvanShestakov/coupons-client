import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { routing,
         appRoutingProviders }  from './app.routing';

import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin.page.component';
import { CustomerPageComponent } from './customer-page/customer.page.component';
import { CompanyPageComponent } from './company-page/company.page.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    AdminPageComponent,
    CustomerPageComponent,
    CompanyPageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }