import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';

import * as actions from './companiesTabState.action';
import { ApiService } from '../../core/services/apiService';
import Company from '../../core/interfaces/company';
import Product from '../../core/interfaces/product';

@Injectable({
    providedIn: 'root',
  })
  export class CompaniesTabStateEffects {
    @Effect()
  LoadCompanies$ = this.action$.pipe(
    ofType(actions.ECompaniesActionTypes.LoadCompanies),
    switchMap(() => this.apiService.getCompanies()),
    switchMap((companies: Company[]) => of(new actions.LoadCompaniesSuccess(companies)))
  );

constructor(
  private action$: Actions,
  private apiService: ApiService
  ) {}

  @Effect()
  LoadCompanyProducts$ = this.action$.pipe(
    ofType(actions.ECompaniesActionTypes.LoadCompanyProducts),

    switchMap((action: actions.LoadCompanyProducts) => this.apiService.getCompanyProducts(action.payload)),
    switchMap((products: Product[]) => of(new actions.LoadCompanyProductsSuccess(products)))
  );

  // LoadCompanyProducts$ = this.action$.pipe(
  //   ofType(actions.CompaniesActionTypes.LoadCompanyProducts),
  //   switchMap((details) => this.apiService.getCompanyDetails(1)),
  //   switchMap((action) => this.apiService.getCompanyProducts(1)),
  //   switchMap((products:Product[]) => of(new actions.LoadCompanyProductsSuccess(products)))
  // )



}
