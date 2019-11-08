import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { ordersTabReducer } from './ordersTabState.reducer';
// import { OrdersTabStateEffects } from './ordersTabState.effect';



@NgModule({
  declarations: [],
  imports: [
    // StoreModule.forFeature('ordersTab', ordersTabReducer),
    // EffectsModule.forFeature([ordersTabStateEffects]),

    CommonModule
  ]
})
export class OrdersTabStateModule { }
