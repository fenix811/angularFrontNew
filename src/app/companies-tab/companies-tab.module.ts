import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyQuickSearchComponent } from './company-quick-search/company-quick-search.component';
import { CompanyProductsComponent } from './company-products/company-products.component';
import { AppMaterialModule } from '../layout/app.material.module';



@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyDetailsComponent,
    CompanyQuickSearchComponent,
    CompanyProductsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AppMaterialModule
  ],
  exports: [CompanyListComponent]

})
export class CompaniesTabModule { }
