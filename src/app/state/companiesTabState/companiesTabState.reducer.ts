import {
    ActionReducer,
      ActionReducerMap,
      createFeatureSelector,
      createSelector,
      MetaReducer
    } from '@ngrx/store';
import Company from '../../interfaces/company';
import {CompaniesActionTypes, CompanyActions} from './companiesTabState.action';
    
export interface CompaniesTabState {
    companies: Company[];
    selectedCompany: Company;
  }
export const initialState: CompaniesTabState = {
  companies: null,
  selectedCompany: null,
}

export const companiesTabReducer = (
  state = initialState,
  action: CompanyActions
) => {
  switch (action.type) {
    case CompaniesActionTypes.LoadCompaniesSuccess:{
      console.log(action.payload);
      debugger;
      return {
        ...state,
        companies: action.payload,
      }
    }
  default:
    return state;
}
}

