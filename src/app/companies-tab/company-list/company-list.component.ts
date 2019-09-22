import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { AppState } from '../../state/appState/appState.reducer'
import { getAppState } from '../../state/appState/appState.selector'

import Company from '../../interfaces/company';
import {LoadCompanies, SelectCompany} from '../../state/companiesTabState/companiesTabState.action'
import { getCompanies, } from '../../state/companiesTabState/companiesTabState.selector';
import { RootState } from '../../state/root-state';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies1$;

  constructor(
    private store: Store<RootState>,
    private _router: Router,
    ) { }

  navigateCompany(company: Company) {
    debugger;
    this.store.dispatch(new SelectCompany(company));
    //this._router.navigate(['/company', { queryParams: { id: company.id }});
    //this._router.navigate(['company'], { queryParams: { id: company.id } });
    this._router.navigate(['company', company.id]);

  }

  ngOnInit() {
   this.store.dispatch(new LoadCompanies());

   this.companies1$ = this.store.pipe(select(getCompanies));
   //this.companies1$ = this.store.pipe(select((state: RootState) => state.companiesTab.companies));

  }

}
