import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {debounce, switchMap, map, tap, distinctUntilChanged} from 'rxjs/operators';
import { interval, Observable } from 'rxjs';
import { ApiService } from '../../core/services/apiService';

@Component({
  selector: 'app-company-quick-search',
  templateUrl: './company-quick-search.component.html',
  styleUrls: ['./company-quick-search.component.scss']
})
export class CompanyQuickSearchComponent implements OnInit {
  private searchForm: FormGroup;
  private products$;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      productName: ''
    });
  }
  ngOnInit() {
    this.products$ = this.searchForm.valueChanges.pipe(
      debounce(() => interval(400)),
        distinctUntilChanged(),   // ignore if next search query is same as previous
        tap( v => console.log('tap: ' + v)),
        switchMap(query => this.apiService.searchProduct(query.productName)
        ));
}

}


