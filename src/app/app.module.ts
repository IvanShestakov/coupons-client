import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { routing,
         appRoutingProviders }  from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login.component';
import { AdminPageComponent } from './admin-page/admin.page.component';
import { CustomerPageComponent } from './customer-page/customer.page.component';
import { CompanyPageComponent } from './company-page/company.page.component';
import { AuthenticationService} from './authentication/authentication.service';
import { CompanyService } from './admin-page/company.service';
import { CompaniesListComponent } from './admin-page/companies.list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPageComponent,
    CustomerPageComponent,
    CompanyPageComponent,
    CompaniesListComponent
  ],
  providers: [ AuthenticationService, CompanyService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }