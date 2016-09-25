import { Component, Input, OnInit } from '@angular/core';

import { Company } from '../shared/company';
import { CompanyService } from './company.service';


@Component({
  selector: 'company-details',
  templateUrl: 'company.details.component.html',
  styleUrls: ['./company.details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  @Input()
    company: Company;

    constructor( private companyService: CompanyService) { }

        save(company: Company): void {
        this.companyService.update(company)
            .then(company => {
                () => company;
            });
        }
        cancel(): void {
        this.companyService.getCompany(this.company.id)
            .then(company => {
                () => company;
            });
        }
        ngOnInit(): void {
          //load company details from server
          this.companyService.getCompany(this.company.id)
            .then(company => this.company = company);
        }
 }