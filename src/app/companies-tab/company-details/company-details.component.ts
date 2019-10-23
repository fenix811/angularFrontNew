import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RootState } from '../../state/root-state';
import { getSelectedCompany, getCompanyPeoducts, getCompanies, getFeatureData, getSelectedCompanyById } from '../../state/companiesTabState/companiesTabState.selector';
import {LoadCompanyProducts, SelectCompany} from '../../state/companiesTabState/companiesTabState.action'
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
    ) {
     }

  ngOnInit() {

    //this.store.pipe(select(getSelectedCompanyById(this._route.snapshot.params.id))) //TODO FIX & move to effect


    this.store.dispatch(new LoadCompanyProducts(this._route.snapshot.params.id));
    this.selectedCompany$ = this.store.pipe(select(getSelectedCompany));

    this.companyProducts$ = this.store.pipe(select(getCompanyPeoducts));


  }

}
