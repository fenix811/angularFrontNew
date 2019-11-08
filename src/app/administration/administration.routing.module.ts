import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { LoginComponent } from './login/login.component';
import { AdministrationComponent } from './administration/administration.component';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationModule } from './administration.module';
import {AuthGuard} from './guards/authGuard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecondAdminComponent } from './second-admin/second-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
//    canActivate: [AuthGuard],
    children :[
      { path: 'dashboard', component: DashboardComponent},
      { path: 'secondAdmin', component: SecondAdminComponent},
  ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
