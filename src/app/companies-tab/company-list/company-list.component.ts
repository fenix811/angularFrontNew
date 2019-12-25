import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import Company from '../../core/interfaces/company';
import {LoadCompanies, SelectCompany} from '../../state/companiesTabState/companiesTabState.action'
import { getCompanies, } from '../../state/companiesTabState/companiesTabState.selector';
import { RootState } from '../../state/root-state';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies$;

  constructor(
    private store: Store<RootState>,
    private _router: Router,
    ) { }

  navigateCompany(company: Company) {
    this.store.dispatch(new SelectCompany(company));
    this._router.navigate(['company', company.id]);

  }

  ngOnInit() {
   this.store.dispatch(new LoadCompanies());

   this.companies$ = this.store.pipe(select(getCompanies));
  }

}
