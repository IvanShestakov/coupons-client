import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Company } from '../shared/company';

@Injectable()
export class CompanyService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //TODO: change base URL to be configurable from config file.
  private baseURL = "http://localhost:8080/coupon-management/webapi"
  private companiesURL = this.baseURL.concat('/companies');  

  constructor(private http: Http) { }

  getCompanies(): Promise<Company[]> {
    return this.http.get(this.companiesURL)
               .toPromise()
               .then(response => response.json() as Company[])
               .catch(this.handleError);
/*    //Debugging:
    let companies: Company[] = [
      { id: 11, compName: 'Toys\'R\'Us', password: '1234', email: 'sales@company.com' },
      { id: 12, compName: 'Daka90', password: '1234', email: 'sales@company.com' }];
    return Promise.resolve(companies);*/

  }
  

  getCompany(id: number): Promise<Company> {
    return this.getCompanies()
               .then(companies => companies.find(company => company.id === id));
  }

  delete(id: number): Promise<void> {
    let url = `${this.companiesURL}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(company: Company): Promise<Company> {
    return this.http
      .post(this.companiesURL, JSON.stringify(company), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(company: Company): Promise<Company> {
    return this.http
      .put(this.companiesURL, JSON.stringify(company), {headers: this.headers})
      .toPromise()
      .then(() => company)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
