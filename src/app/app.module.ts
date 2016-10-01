import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { routing,
         appRoutingProviders }  from './app.routing';
import { HttpModule } from '@angular/http';
//import { DatePicker } from 'ng2-datepicker/ng2-datepicker';


import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login.component';
import { AdminPageComponent } from './admin-page/admin.page.component';
import { CustomerPageComponent } from './customer-page/customer.page.component';
import { CompanyPageComponent } from './company-page/company.page.component';
import { AuthenticationService} from './authentication/authentication.service';
import { CompanyService } from './admin-page/company.service';
import { CompaniesListComponent } from './admin-page/companies.list.component';
import { CompanyDetailsComponent } from './admin-page/company.details.component';
import { CustomerService } from './admin-page/customer.service';
import { CustomersListComponent } from './admin-page/customers.list.component';
import { CustomerDetailsComponent } from './admin-page/customer.details.component';
import { CompanyCouponService } from './company-page/company.coupon.service';
import { CompanyCouponsListComponent } from './company-page/coupons.list.component';
import { CouponDetailsComponent } from './company-page/coupon.details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //DatePicker,
    routing
  ],
  declarations: [
    //DatePicker,
    CompanyDetailsComponent,
    CompaniesListComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    AdminPageComponent,
    CustomerPageComponent,
    CompanyCouponsListComponent,
    CouponDetailsComponent,
    CompanyPageComponent, 
    LoginComponent,
    AppComponent
  ],
  providers: [ AuthenticationService, CompanyService, CustomerService, CompanyCouponService ],
  bootstrap: [ AppComponent]
})
export class AppModule { }