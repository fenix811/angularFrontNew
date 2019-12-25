import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';

import * as actions from './ordersTabState.action';
import { ApiService } from '../../core/services/apiService';
import Order from '../../core/interfaces/order';

@Injectable({
    providedIn: 'root',
  })

  export class OrdersTabStateEffects {
    @Effect()
  LoadOrders$ = this.action$.pipe(
    ofType(actions.EOrdersActionTypes.LoadOrders),
    switchMap(() => this.apiService.getOrders()),
    switchMap((orders: Order[]) => of(new actions.LoadOrdersSuccess(orders)))
  );

constructor(
  private action$: Actions,
  private apiService: ApiService
  ) {}


}
