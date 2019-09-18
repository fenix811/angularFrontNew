import { storeFreeze } from "ngrx-store-freeze";

import { AppState } from './appState/appState.reducer';
import { CompaniesTabState } from './companiesTabState/companiesTabState.reducer';

export interface RootState {
  app: AppState;
  companiesTab: CompaniesTabState;
}

export const metaReducers = [storeFreeze];
