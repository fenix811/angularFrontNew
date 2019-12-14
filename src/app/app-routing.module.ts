import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClientLayoutComponent} from './layout/client-layout/client-layout.component';
import { LoginComponent } from './core/login/login.component';
import { CompanyDetailsComponent } from './companies-tab/company-details/company-details.component';
import { CompanyListComponent } from './companies-tab/company-list/company-list.component';
import { OrderListComponent } from './orders-tab/order-list/order-list.component';
import { OrdersModule } from './orders-tab/orders-module.module';

const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent,
    children: [
      { path: '', component: CompanyListComponent },
      { path: 'company/:id', component: CompanyDetailsComponent },
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
    path: 'orders',
    loadChildren: () => OrdersModule
    //component: OrderListComponent,

    //component: ClientLayoutComponent,
    // children: [
    //   { path: '', component: OrderListComponent },
    // ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
