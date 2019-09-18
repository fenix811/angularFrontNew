import { createSelector,createFeatureSelector } from '@ngrx/store';

import { CompaniesTabState } from './companiesTabState.reducer';
import { RootState } from '../root-state';

const selectCompanies = (state: RootState) => state.companiesTab.companies;

// export const selectCompanyList = createSelector(
//     selectCompanies,
//     (state: CompaniesTabState) => state.companies
//   );
  
  export const getXZData = createFeatureSelector<
  CompaniesTabState
>('companiesTab');

export const getCompanies = () =>
  createSelector(
    getXZData,
    (state) => {
        return state.companies;
    },
  );
