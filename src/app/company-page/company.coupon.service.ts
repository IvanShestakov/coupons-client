import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Coupon } from '../shared/coupon';

@Injectable()
export class CompanyCouponService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //TODO: change base URL to be configurable from config file.
  private baseURL = "http://localhost:8080/coupon-management/webapi"
  private couponsURL = this.baseURL.concat('/coupons/company');  

  constructor(private http: Http) { }

  getCoupons(): Promise<Coupon[]> {
    let url = `${this.couponsURL}/${sessionStorage.getItem('userId')}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as Coupon[])
               .catch(this.handleError);
                   //Debugging:
                   
/*    let coupons: Coupon[] = [
      { id: 11, title: "Coupon Title 1", startDate: "30/10/2015", endDate: "30/10/2017", amount: 10, price: 99.99, type: "ACCOMODATIONS", image: "/public/generic.png", description: "This is full description for coupon id 11" },
     { id: 12, title: "Coupon Title 2", startDate: "30/10/2015", endDate: "30/10/2017", amount: 100, price: 9.99, type: "RESTAURANTS", image: "/public/generic.png", description: "This is full description for coupon id 12" }];
    return Promise.resolve(coupons);*/
  }
  

  getCoupon(id: number): Promise<Coupon> {
    return this.getCoupons()
               .then(coupons => coupons.find(coupon => coupon.id === id));
  }

  delete(id: number): Promise<void> {
    let url = `${this.couponsURL}/${sessionStorage.getItem('userId')}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(coupon: Coupon): Promise<Coupon> {
    let url = `${this.couponsURL}/${sessionStorage.getItem('userId')}`;
    return this.http
      .post(url, JSON.stringify(coupon), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(coupon: Coupon): Promise<Coupon> {
    let url = `${this.couponsURL}/${sessionStorage.getItem('userId')}`;
    return this.http
      .put(url, JSON.stringify(coupon), {headers: this.headers})
      .toPromise()
      .then(() => coupon)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
