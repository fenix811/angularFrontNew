import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';

import * as actions from './companiesTabState.action';
import { ApiService } from '../../services/apiService';
import Company from '../../interfaces/company';
import Product from '../../interfaces/product';

@Injectable({
    providedIn: 'root',
  })
  export class CompaniesTabStateEffects {
    @Effect()
  LoadCompanies$ = this.action$.pipe(
    ofType(actions.CompaniesActionTypes.LoadCompanies),
    // map((action: action$.LoadCompanies) => action.payload),
    switchMap(() => this.apiService.getCompanies()),
    switchMap((companies: Company[]) => of(new actions.LoadCompaniesSuccess(companies)))
  );

constructor(
  private action$: Actions,
  private apiService: ApiService
  ) {}

  // @Effect()
  // SelectCompany$ = this.action$.pipe(   //TODO call getCompanyProducts on this
  //   ofType(actions.CompaniesActionTypes.SelectCompany),
  //   // map(action => this.action$.payload),
  //   // switchMap(() => of(new actions.LoadCompanyProducts(this.action$.payload)))
  // );

  @Effect()
  LoadCompanyProducts$ = this.action$.pipe(
    ofType(actions.CompaniesActionTypes.LoadCompanyProducts),
    map(action => this.action$.payload),
  switchMap((payload) => this.apiService.getCompanyProducts(payload.id)),
    switchMap((products:Product[]) => of(new actions.LoadCompanyProductsSuccess(products)))
  )


}
