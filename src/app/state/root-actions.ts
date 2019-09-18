import { AppActions } from './appState/appState.action';
import { CompanyActions } from './companiesTabState/companiesTabState.action';

export type All =
  | AppActions
  | CompanyActions
