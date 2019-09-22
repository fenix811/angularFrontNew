import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';



@NgModule({
  declarations: [CompanyListComponent, CompanyDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    RouterModule,
  ],
  exports: [CompanyListComponent]

})
export class CompaniesTabModule { }
