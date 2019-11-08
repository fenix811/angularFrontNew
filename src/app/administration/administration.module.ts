import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration/administration.component';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationRoutingModule } from './administration.routing.module';

import { AuthGuard } from './guards/authGuard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecondAdminComponent } from './second-admin/second-admin.component';



@NgModule({
  declarations: [
    AdministrationComponent,
    DashboardComponent,
    SecondAdminComponent,
//    LoginComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ],
  exports: [
//    LoginComponent
  ],
  providers: [AuthGuard]

})
export class AdministrationModule { }
