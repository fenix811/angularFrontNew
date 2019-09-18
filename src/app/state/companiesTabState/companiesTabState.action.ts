import { Action } from '@ngrx/store';

import Company from '../../interfaces/company'

export enum CompaniesActionTypes {
    LoadCompanies = '[Companies] LoadCompanies',
    LoadCompaniesSuccess = '[Companies] LoadCompaniesSuccess',
    LoadCompaniesFailure = '[Companies] LoadCompaniesFailure',
  }
  export class LoadCompanies implements Action {
    readonly type = CompaniesActionTypes.LoadCompanies;
  
//     constructor(public payload: {
//     }) { }
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

  export type CompanyActions = LoadCompanies | LoadCompaniesSuccess | LoadCompaniesFailure