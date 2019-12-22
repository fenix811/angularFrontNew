import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClientLayoutComponent} from './layout/client-layout/client-layout.component';
import { LoginComponent } from './core/login/login.component';
import { CompanyDetailsComponent } from './companies-tab/company-details/company-details.component';
import { CompanyListComponent } from './companies-tab/company-list/company-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: CompanyListComponent },
      { path: 'company/:id', component: CompanyDetailsComponent },
      { path: 'orders',
        loadChildren: () => import('./orders-tab/orders-tab.module').then((m) => m.OrdersModule)
      }
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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
