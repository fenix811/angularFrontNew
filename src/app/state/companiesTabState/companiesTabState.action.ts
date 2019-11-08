import { Action } from '@ngrx/store';

import Company from '../../interfaces/company'
import Product from '../../interfaces/product';

export enum ECompaniesActionTypes {
    LoadCompanies = '[Companies] LoadCompanies',
    LoadCompaniesSuccess = '[Companies] LoadCompaniesSuccess',
    LoadCompaniesFailure = '[Companies] LoadCompaniesFailure',
    SelectCompany = '[Companies] SelectCompany',
    LoadCompanyProducts = '[Companies] LoadCompanyProducts',
    LoadCompanyProductsSuccess = '[Companies] LoadCompanyProductsSuccess',
    LoadCompanyProductsFailure = '[Companies] LoadCompanyProductsFailure',
    ResetSelectedCompany = '[Companies] ResetSelectedCompany',

  }
export class LoadCompanies implements Action {
    readonly type = ECompaniesActionTypes.LoadCompanies;
   }

export class LoadCompaniesSuccess implements Action {
    readonly type = ECompaniesActionTypes.LoadCompaniesSuccess;

    constructor(public payload: Company[] ) { }
  }
export class LoadCompaniesFailure implements Action {
    readonly type = ECompaniesActionTypes.LoadCompaniesFailure;

    constructor(public payload: {
      error: string,
    }) { }
  }

export class SelectCompany implements Action {
    readonly type = ECompaniesActionTypes.SelectCompany;

    constructor(public payload: Company) { }
  }

export class LoadCompanyProducts implements Action {
    readonly type = ECompaniesActionTypes.LoadCompanyProducts;

    constructor(public payload: number ) { }
  }
export class LoadCompanyProductsSuccess implements Action {
    readonly type = ECompaniesActionTypes.LoadCompanyProductsSuccess;

    constructor(public payload: Product[] ) { }
  }
export class LoadCompanyProductsFailure implements Action {
    readonly type = ECompaniesActionTypes.LoadCompanyProductsFailure;

    constructor(public payload: {
      error: string,
    }) { }
  }
export class ResetSelectedCompany implements Action {
    readonly type = ECompaniesActionTypes.ResetSelectedCompany;
    constructor() { }
  }


export type CompanyActions = LoadCompanies | LoadCompaniesSuccess | LoadCompaniesFailure | SelectCompany
  | LoadCompanyProducts | LoadCompanyProductsSuccess | LoadCompanyProductsFailure | ResetSelectedCompany;
