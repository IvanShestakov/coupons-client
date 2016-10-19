import { Component, OnInit} from '@angular/core';


import { Coupon } from '../shared/coupon';
import { CustomerCouponService } from './customer.coupon.service';
import { CouponExpandedComponent } from './coupon-expanded.component'

@Component({
  templateUrl: './customer.page.component.html',
  styleUrls: ['./customer.page.component.css']
})
export class CustomerPageComponent implements OnInit {
    allCoupons: Coupon[];
    customerCoupons: Coupon[];
    selectedCoupon: Coupon;

    constructor(
      private customerCouponService: CustomerCouponService){ }


    getAllCoupons(): void {
        this.customerCouponService
        .getAllPublishedCoupons()
        .then(coupons => this.allCoupons = coupons);
    }
  
    getCustomerCoupons(): void {
        this.customerCouponService
        .getCustomerCoupons()
        .then(coupons => this.customerCoupons = coupons);
    }

    purchaseCoupon(coupon: Coupon): void {
        this.customerCouponService
            .purchaseCoupon(coupon.id)
            .then( coupon => this.customerCoupons.push(coupon));
    }

    onSelect(coupon: Coupon):void {
        this.selectedCoupon = coupon;
    }

    ngOnInit(){
      this.getAllCoupons();
      this.getCustomerCoupons();
    }
 }