import { Action } from '@ngrx/store';

import Order from '../../core/interfaces/order';
import OrderItem from '../../core/interfaces/orderItem';

export enum EOrdersActionTypes {
  LoadOrders = '[Orders] LoadOrders',
  LoadOrdersSuccess = '[Orders] LoadOrdersSuccess',
  LoadOrdersFailure = '[Orders] LoadOrdersFailure',
  SelectOrder = '[Orders] SelectOrder',
  LoadOrderItems = '[Orders] LoadOrderItems',
  LoadOrderItemsSuccess = '[Orders] LoadOrderItemsSuccess',
  LoadOrderItemsFailure = '[Orders] LoadOrderItemsFailure',
}

export class LoadOrders implements Action {
  readonly type = EOrdersActionTypes.LoadOrders;
 }

export class LoadOrdersSuccess implements Action {
  readonly type = EOrdersActionTypes.LoadOrdersSuccess;

  constructor(public payload: Order[] ) { }
}
export class LoadOrdersFailure implements Action {
  readonly type = EOrdersActionTypes.LoadOrdersFailure;

  constructor(public payload: {
    error: string,
  }) { }
}


export class SelectOrder implements Action {
  readonly type = EOrdersActionTypes.SelectOrder;
  constructor(public payload: Order) { }

 }

export class LoadOrderItems implements Action {
  readonly type = EOrdersActionTypes.LoadOrderItems;
 }

export class LoadOrderItemsSuccess implements Action {
  readonly type = EOrdersActionTypes.LoadOrderItemsSuccess;

  constructor(public payload: OrderItem[] ) { }
}
export class LoadOrderItemsFailure implements Action {
  readonly type = EOrdersActionTypes.LoadOrderItemsFailure;

  constructor(public payload: {
    error: string,
  }) { }
}

export type OrderActions = LoadOrders | LoadOrdersSuccess | LoadOrdersFailure | SelectOrder
  | LoadOrderItems | LoadOrderItemsSuccess | LoadOrderItemsFailure;
