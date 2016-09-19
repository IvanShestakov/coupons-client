import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPageComponent } from './admin-page/admin.page.component';
import { CustomerPageComponent } from './customer-page/customer.page.component';
import { CompanyPageComponent } from './company-page/company.page.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },  
  { path: 'admin', component: AdminPageComponent },
  { path: 'company', component: CompanyPageComponent },
  { path: 'customer', component: CustomerPageComponent}/*,
  { path: '', component: AppComponent },
  { path: '**', component: PageNotFoundComponent }*/
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);