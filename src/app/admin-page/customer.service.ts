import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Customer } from '../shared/customer';

@Injectable()
export class CustomerService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //TODO: change base URL to be configurable from config file.
  private baseURL = "http://localhost:8080/coupon-management/webapi"
  private customersURL = this.baseURL.concat('/customers');  

  constructor(private http: Http) { }

  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.customersURL)
               .toPromise()
               .then(response => response.json() as Customer[])
               .catch(this.handleError);
  }
  

  getCustomer(id: number): Promise<Customer> {
    return this.getCustomers()
               .then(customers => customers.find(customer => customer.id === id));
  }

  delete(id: number): Promise<void> {
    let url = `${this.customersURL}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(customer: Customer): Promise<Customer> {
    return this.http
      .post(this.customersURL, JSON.stringify(customer), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(customer: Customer): Promise<Customer> {
    let url = `${this.customersURL}/${customer.id}`;
    return this.http
      .put(url, JSON.stringify(customer), {headers: this.headers})
      .toPromise()
      .then(() => customer)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
