import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {ClientComponent} from './layout/client/client.component';
import { LoginComponent } from './login/login.component';
import { CompanyDetailsComponent } from './companies-tab/company-details/company-details.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
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



// export const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'client' },
//   { path: 'client', component: AppComponent },
//   {
//     path: 'login',
//     loadChildren: './administration/administration.module#AdministrationModule',
//   },
// ]

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes)