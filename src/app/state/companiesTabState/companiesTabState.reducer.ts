import {
    ActionReducer,
      ActionReducerMap,
      createFeatureSelector,
      createSelector,
      MetaReducer
    } from '@ngrx/store';
import Company from '../../interfaces/company';
import {CompaniesActionTypes, CompanyActions} from './companiesTabState.action';
import Product from '../../interfaces/product';
    
export interface CompaniesTabState {
    companies: Company[];
    selectedCompany: Company;
    companyProducts: Product[];
  }
export const initialState: CompaniesTabState = {
  companies: [],
  selectedCompany: null,
  companyProducts: []
}

export const companiesTabReducer = (
  state = initialState,
  action: CompanyActions
) => {
  switch (action.type) {
    case CompaniesActionTypes.LoadCompaniesSuccess:{
      return {
        ...state,
        companies: action.payload,
      };
    }
      case CompaniesActionTypes.SelectCompany:{
              return {
                ...state,
                selectedCompany: action.payload,
              }
            }
      case CompaniesActionTypes.LoadCompanyProductsSuccess:{
        debugger;
        return {
          ...state,
          companyProducts: action.payload,
        }
      }
  default:
    return state;
}
}

