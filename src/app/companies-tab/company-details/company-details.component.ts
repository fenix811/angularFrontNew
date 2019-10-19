import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RootState } from '../../state/root-state';
import { getSelectedCompany, getCompanyPeoducts } from '../../state/companiesTabState/companiesTabState.selector';
import {LoadCompanyProducts} from '../../state/companiesTabState/companiesTabState.action'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
selectedCompany$;
companyProducts$;

  constructor(
    private store: Store<RootState>,
    private _route: ActivatedRoute

    ) { }

  ngOnInit() {
    //debugger;
    this.store.dispatch(new LoadCompanyProducts(this._route.snapshot.params.id));
    this.selectedCompany$ = this.store.pipe(select(getSelectedCompany));

    this.companyProducts$ = this.store.pipe(select(getCompanyPeoducts));


  }

}
