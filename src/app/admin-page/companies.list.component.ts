import { Component, OnInit } from '@angular/core';

import { Company } from '../shared/company';
import { CompanyService } from './company.service';

@Component({
    selector: 'companies',
    templateUrl: './companies.list.component.html',
    styleUrls: ['./companies.list.component.css']
})
export class CompaniesListComponent implements OnInit{
    companies: Company[];
    selectedCompany: Company;
    newCompany: Company;
    
    constructor(
        private companyService: CompanyService) { }
    
    getCompanies(): void {
        this.companyService
        .getCompanies()
        .then(companies => this.companies = companies);
    }

    add(company: Company): void {
        this.companyService.create(company)
            .then(company => {
                this.companies.push(company);
                this.selectedCompany = null;
            });
    }

    delete(company : Company ): void {
        this.companyService
            .delete( company.id )
            .then(() => {
                this.companies = this.companies.filter(c => c !== company);
                if (this.selectedCompany === company) {this.selectedCompany = null;}
            });
    }

    ngOnInit():void {
        this.getCompanies();
        //Must create instance - otherwise template yells about undefined object
        this.newCompany = new Company();
    }

    onSelect(company: Company):void {
        this.selectedCompany = company;
    }
 }