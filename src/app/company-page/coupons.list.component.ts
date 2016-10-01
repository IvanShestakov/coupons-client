import { Component, OnInit } from '@angular/core';
//import { DatePicker } from 'ng2-datepicker/ng2-datepicker';

import { Coupon } from '../shared/coupon';
import { CompanyCouponService } from './company.coupon.service';

@Component({
    selector: 'company-coupons',
    templateUrl: './coupons.list.component.html',
    styleUrls: ['./coupons.list.component.css']
})
export class CompanyCouponsListComponent implements OnInit{
    coupons: Coupon[];
    selectedCoupon: Coupon;
    newCoupon: Coupon;
    
    constructor(
        private companyCouponService: CompanyCouponService) { }
    
    getCoupons(): void {
        this.companyCouponService
        .getCoupons()
        .then(coupons => this.coupons = coupons);
    }

    add(coupon: Coupon): void {
        this.companyCouponService.create(coupon)
            .then(coupon => {
                this.coupons.push(coupon);
                this.selectedCoupon = null;
            });
    }

    delete(coupon : Coupon ): void {
        this.companyCouponService
            .delete( coupon.id )
            .then(() => {
                this.coupons = this.coupons.filter(c => c !== coupon);
                if (this.selectedCoupon === coupon) {this.selectedCoupon = null;}
            });
    }

    ngOnInit():void {
        this.getCoupons();
        //Must create instance - otherwise template yells about undefined object
        this.newCoupon = new Coupon();
    }

    onSelect(coupon: Coupon):void {
        this.selectedCoupon = coupon;
    }
 }