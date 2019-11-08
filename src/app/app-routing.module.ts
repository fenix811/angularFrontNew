import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClientLayoutComponent} from './client-layout/client-layout.component';
import { LoginComponent } from './login/login.component';
import { CompanyDetailsComponent } from './companies-tab/company-details/company-details.component';
import { CompanyListComponent } from './companies-tab/company-list/company-list.component';

const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent,
    children: [
      { path: '', component: CompanyListComponent },
    ]
  },
  {
    path: 'admin',
    loadChildren: './administration/administration.module#AdministrationModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'company/:id',
    component: CompanyDetailsComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
