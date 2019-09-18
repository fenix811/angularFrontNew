import { createSelector,createFeatureSelector } from '@ngrx/store';
import { CompaniesTabState } from './companiesTabState.reducer';

  export const getFeatureData = createFeatureSelector<CompaniesTabState>('companiesTab');

export const getCompanies = createSelector(
    getFeatureData,
    (state: CompaniesTabState) => state.companies
  );

