import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration/administration.component';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationRoutingModule } from './administration.routing.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/authGuard';
import { AuthenticationService } from './services/authenticationService';



@NgModule({
  declarations: [
    AdministrationComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ],
  exports: [
//    LoginComponent
  ],
  providers: [AuthGuard, AuthenticationService]
  
})
export class AdministrationModule { }
