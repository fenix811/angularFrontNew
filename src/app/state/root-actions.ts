import { AppActions } from './appState/appState.action';
import { CompanyActions } from './companiesTabState/companiesTabState.action';
import { OrderActions } from './ordersTabState/ordersTabState.action';

export type All =
  | AppActions
  | CompanyActions
  | OrderActions;
