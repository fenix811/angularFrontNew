import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'client' },
  { path: 'client', component: AppComponent },
  {
    path: 'login',
    loadChildren: './administration/administration.module#AdministrationModule',
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