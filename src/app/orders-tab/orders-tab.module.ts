import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { AppMaterialModule } from '../layout/app.material.module';
import { ShortDatePipe } from '../core/pipes/date-pipe';

@NgModule({
  declarations: [
   OrderListComponent,
   ShortDatePipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    RouterModule.forChild([
     {path: '', pathMatch: 'full', component: OrderListComponent}
    ])
  ]
})
export class OrdersModule { }
