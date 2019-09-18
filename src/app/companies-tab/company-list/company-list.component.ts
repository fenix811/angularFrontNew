import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState } from '../../state/appState/appState.reducer'
import { getAppState } from '../../state/appState/appState.selector'

import Company from '../../interfaces/company';
import {LoadCompanies} from '../../state/companiesTabState/companiesTabState.action'
import { getCompanies } from 'src/app/state/companiesTabState/companiesTabState.selector';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  // companies$: Observable<Company[]>;
  companies$ = this.store.pipe(select(getCompanies));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

   this.store.dispatch(new LoadCompanies());

  }

}
