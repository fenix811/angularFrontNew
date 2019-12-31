import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap} from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';

import * as actions from './ordersTabState.action';
import { ApiService } from '../../core/services/apiService';
import Order from '../../core/interfaces/order';
import { LoadOrdersSuccess } from './ordersTabState.action';

@Injectable({
    providedIn: 'root',
  })

  export class OrdersTabStateEffects {
    @Effect()
  LoadOrders$ = this.action$.pipe(
    ofType(actions.EOrdersActionTypes.LoadOrders),
    switchMap(() => forkJoin(this.apiService.getOrders(), this.apiService.getBonusDates())),
    switchMap((a) => {
      return of(new LoadOrdersSuccess({orders: a[0], dates: a[1]})) //TODO MIERDA
    })


  );

constructor(
  private action$: Actions,
  private apiService: ApiService
  ) {}


}
