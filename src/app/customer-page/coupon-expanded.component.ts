import { Component, Input } from '@angular/core';

import { Coupon } from '../shared/coupon';

@Component({
    selector: 'coupon-expanded',
    templateUrl: './coupon-expanded.component.html'
})
export class CouponExpandedComponent {
    @Input()
    coupon: Coupon;

}