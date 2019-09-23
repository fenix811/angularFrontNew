import { Action } from '@ngrx/store';

import Company from '../../interfaces/company'
import Product from '../../interfaces/product';

export enum CompaniesActionTypes {
    LoadCompanies = '[Companies] LoadCompanies',
    LoadCompaniesSuccess = '[Companies] LoadCompaniesSuccess',
    LoadCompaniesFailure = '[Companies] LoadCompaniesFailure',
    SelectCompany = '[Companies] SelectCompany',
    LoadCompanyProducts = '[Companies] LoadCompanyProducts',
    LoadCompanyProductsSuccess = '[Companies] LoadCompanyProductsSuccess',
    LoadCompanyProductsFailure = '[Companies] LoadCompanyProductsFailure',

  }
  export class LoadCompanies implements Action {
    readonly type = CompaniesActionTypes.LoadCompanies;
   }
  
  export class LoadCompaniesSuccess implements Action {
    readonly type = CompaniesActionTypes.LoadCompaniesSuccess;
  
    constructor(public payload: Company[] ) { }
  }
  export class LoadCompaniesFailure implements Action {
    readonly type = CompaniesActionTypes.LoadCompaniesFailure;
  
    constructor(public payload: {
      error: string,
    }) { }
  }

  export class SelectCompany implements Action {
    readonly type = CompaniesActionTypes.SelectCompany;
  
    constructor(public payload: Company) { }
  }

  export class LoadCompanyProducts implements Action {
    readonly type = CompaniesActionTypes.LoadCompanyProducts;
  
    constructor(public payload: {id: number}) { }
  }
  export class LoadCompanyProductsSuccess implements Action {
    readonly type = CompaniesActionTypes.LoadCompanyProductsSuccess;
  
    constructor(public payload: Product[] ) { }
  }
  export class LoadCompanyProductsFailure implements Action {
    readonly type = CompaniesActionTypes.LoadCompanyProductsFailure;
  
    constructor(public payload: {
      error: string,
    }) { }
  }

  export type CompanyActions = LoadCompanies | LoadCompaniesSuccess | LoadCompaniesFailure | SelectCompany
  | LoadCompanyProducts | LoadCompanyProductsSuccess | LoadCompanyProductsFailure