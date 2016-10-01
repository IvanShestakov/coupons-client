import { Component, Input, OnInit } from '@angular/core';
//import { DatePicker } from 'ng2-datepicker/ng2-datepicker';

import { Coupon } from '../shared/coupon';
import { CompanyCouponService } from './company.coupon.service';


@Component({
  selector: 'coupon-details',
  templateUrl: 'coupon.details.component.html',
  styleUrls: ['./coupon.details.component.css']
  
})
export class CouponDetailsComponent implements OnInit {
  @Input()
    coupon: Coupon;

    constructor( private companyCouponService: CompanyCouponService) { }

        save(coupon: Coupon): void {
        this.companyCouponService.update(coupon)
            .then(coupon => {
                () => coupon;
            });
        }
        cancel(): void {
        this.companyCouponService.getCoupon(this.coupon.id)
            .then(coupon => {
                () => coupon;
            });
        }
        ngOnInit(): void {
          //load coupon details from server
          this.companyCouponService.getCoupon(this.coupon.id)
            .then(coupon => this.coupon = coupon);
        }
 }