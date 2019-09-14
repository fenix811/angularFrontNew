import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';



@NgModule({
  declarations: [CompanyListComponent],
  imports: [
    CommonModule
  ],
  exports: [CompanyListComponent]

})
export class CompaniesTabModule { }
