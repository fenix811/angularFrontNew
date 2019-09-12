import { State } from './appState/appState.reducer';
import { CompaniesTabState } from './companiesTabState/companiesTabState.reducer';

export interface RootState {
  app: State;
  companiesTab: CompaniesTabState;
}