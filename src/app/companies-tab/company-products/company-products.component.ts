import { Component, OnInit, Input } from '@angular/core';
import Product from '../../core/interfaces/product';

@Component({
  selector: 'app-company-products',
  templateUrl: './company-products.component.html',
  styleUrls: ['./company-products.component.scss']
})
export class CompanyProductsComponent implements OnInit {

  @Input()
  products: Product[];
  constructor() { }

  ngOnInit() {
  }

}
