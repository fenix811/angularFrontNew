import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { OrderListComponent } from './order-list/order-list.component';



@NgModule({
  declarations: [
//    OrderListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
//      {path: '', pathMatch: 'full', component: OrderListComponent}
    ])
  ]
})
export class OrdersModule { }
