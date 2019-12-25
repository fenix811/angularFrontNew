import { createSelector,createFeatureSelector } from '@ngrx/store';
import { OrdersTabState } from './ordersTabState.reducer';

export const getFeatureData = createFeatureSelector<OrdersTabState>('ordersTab');

export const getOrders = createSelector(
    getFeatureData,
    (state: OrdersTabState) => state.orders
  );
