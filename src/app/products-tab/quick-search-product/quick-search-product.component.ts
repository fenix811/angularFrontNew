import { Component, OnInit } from '@angular/core';
//import { ProductService } from '../productService';
import { FormBuilder, FormGroup } from '@angular/forms';
import {debounce, switchMap, map, tap, distinctUntilChanged} from 'rxjs/operators';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-quick-search-product',
  templateUrl: './quick-search-product.component.html',
  styleUrls: ['./quick-search-product.component.scss']
})
export class QuickSearchProductComponent implements OnInit {
  private searchForm: FormGroup;
  private products$;

  constructor(
    //private productService: ProductService,
    private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      productName: ''
    });
  }
  ngOnInit() {
    // this.products$ = this.searchForm.valueChanges.pipe(
    //   debounce(() => interval(400)),
    //     distinctUntilChanged(),   // ignore if next search query is same as previous
    //     tap( v => console.log('tap: ' + v)),
    //     switchMap(query => this.productService.searchProduct(query.productName)
    //     ));
}

}


