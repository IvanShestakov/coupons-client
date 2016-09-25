import { Component, OnInit } from '@angular/core';

import { Customer } from '../shared/customer';
import { CustomerService } from './customer.service';

@Component({
    selector: 'customers',
    templateUrl: './customers.list.component.html',
    styleUrls: ['./customers.list.component.css']
})
export class CustomersListComponent implements OnInit{
    customers: Customer[];
    selectedCustomer: Customer;
    newCustomer: Customer;
    
    constructor(
        private customerService: CustomerService) { }
    
    getCustomers(): void {
        this.customerService
        .getCustomers()
        .then(customers => this.customers = customers);
    }

    add(customer: Customer): void {
        this.customerService.create(customer)
            .then(customer => {
                this.customers.push(customer);
                this.selectedCustomer = null;
            });
    }

    delete(customer : Customer ): void {
        this.customerService
            .delete( customer.id )
            .then(() => {
                this.customers = this.customers.filter(c => c !== customer);
                if (this.selectedCustomer === customer) {this.selectedCustomer = null;}
            });
    }

    ngOnInit():void {
        this.getCustomers();
        //Must create instance - otherwise template yells about undefined object
        this.newCustomer = new Customer();
    }

    onSelect(customer: Customer):void {
        this.selectedCustomer = customer;
    }
 }