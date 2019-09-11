import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {ClientComponent} from './layout/client/client.component';
import { LoginComponent } from './login/login.component';
//import {AuthGuard} from './guards/authGuard';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { 
    path: 'admin',
//    canActivate: [AuthGuard],
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



// export const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'client' },
//   { path: 'client', component: AppComponent },
//   {
//     path: 'login',
//     loadChildren: './administration/administration.module#AdministrationModule',
//   },
// ]

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes)