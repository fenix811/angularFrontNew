import { storeFreeze } from "ngrx-store-freeze";

import { AppState } from './appState/appState.reducer';
import { CompaniesTabState } from './companiesTabState/companiesTabState.reducer';
import { OrdersTabState } from './ordersTabState/ordersTabState.reducer';

export interface RootState {
  app: AppState;
  companiesTab: CompaniesTabState;
  ordesTab: OrdersTabState;
}

export const metaReducers = [storeFreeze];
