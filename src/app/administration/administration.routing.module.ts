import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdministrationComponent } from './administration/administration.component';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationModule } from './administration.module';
import {AuthGuard} from './guards/authGuard';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  },

];


// const routes: Routes = [
//   {
//     children: [
//       { path: '', component: AdministrationComponent, 
//         canActivate: [AuthGuard]
//       } ,
//       { path: 'login', 
//         component:  LoginComponent}
//       ]
//   },
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
