import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap} from 'rxjs/operators';
import { of } from 'rxjs';

import * as actions from './companiesTabState.action';
import { ApiService } from '../../services/apiService';
import Company from '../../interfaces/company';

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

constructor(private action$: Actions,
  private apiService: ApiService
  ) {}

//   @Effect()
//   SelectCompany$ = this.action$.pipe(
//     ofType(actions.CompaniesActionTypes.SelectCompany),
//     map(action => this.action$.payload),

// //    switchMap(() => this.apiService.getCompanyProducts()),
//     switchMap((products: Product[]) => of(new actions.LoadCompanyProducts(action$.)))
//   );


}
