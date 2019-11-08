import {
    ActionReducer,
      ActionReducerMap,
      createFeatureSelector,
      createSelector,
      MetaReducer
    } from '@ngrx/store';
import Company from '../../interfaces/company';
import {ECompaniesActionTypes, CompanyActions} from './companiesTabState.action';
import Product from '../../interfaces/product';

export interface CompaniesTabState {
    companies: Company[];
    selectedCompany: Company;
  }
export const initialState: CompaniesTabState = {
  companies: [],
  selectedCompany: null,
}

export const companiesTabReducer = (
  state = initialState,
  action: CompanyActions
) => {
  switch (action.type) {
    case ECompaniesActionTypes.LoadCompaniesSuccess:{
      return {
        ...state,
        companies: action.payload,
      };
    }
      case ECompaniesActionTypes.SelectCompany:{
              return {
                ...state,
                selectedCompany: action.payload,
              }
            }
      case ECompaniesActionTypes.LoadCompanyProductsSuccess:{
        return {
          ...state,
          selectedCompany: {
            ...state.selectedCompany,
            companyProducts: action.payload,
          }
        }
      }
      case ECompaniesActionTypes.ResetSelectedCompany:{
        return {
          ...state,
          selectedCompany: null,
        }
      }

  default:
    return state;
}
}

