import {
    // ActionReducer,
    ActionReducerMap,
    // createFeatureSelector,
    // createSelector,
    MetaReducer
  } from '@ngrx/store';
  import { Action } from '@ngrx/store';

  export enum AppActionTypes {
    Login = '[App] Login',
    LoginSuccess = '[App] LoginSuccess',
    LoginFailure = '[App] LoginFailure',
  }

  export class AppLogin implements Action {
    readonly type = AppActionTypes.Login;
  
    constructor(public payload: {
      username: string,
      password: string,
    }) { }
  }
  
  export class LoginSuccess implements Action {
    readonly type = AppActionTypes.LoginSuccess;
  
    constructor(public payload: {
      username: any,
      token: any,
    }) { }
  }
  export class LoginFailure implements Action {
    readonly type = AppActionTypes.LoginFailure;
  
    constructor(public payload: {
      error: string,
    }) { }
  }
  
  
  
  export type AppActions = AppLogin | LoginSuccess | LoginFailure

  