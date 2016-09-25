import { Component, Input, OnInit } from '@angular/core';

import { Customer } from '../shared/customer';
import { CustomerService } from './customer.service';


@Component({
  selector: 'customer-details',
  templateUrl: 'customer.details.component.html'/*,
  styleUrls: ['./customer.details.component.css']*/
})
export class CustomerDetailsComponent implements OnInit {
  @Input()
    customer: Customer;

    constructor( private customerService: CustomerService) { }

        save(customer: Customer): void {
        this.customerService.update(customer)
            .then(customer => {
                () => customer;
            });
        }
        cancel(): void {
        this.customerService.getCustomer(this.customer.id)
            .then(customer => {
                () => customer;
            });
        }
        ngOnInit(): void {
          //load customer details from server
          this.customerService.getCustomer(this.customer.id)
            .then(customer => this.customer = customer);
        }
 }