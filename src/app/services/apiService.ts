import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import Product from '../interfaces/product';
import Company from '../interfaces/company';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:61885/api/';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('api/product/GetProducts');
  }
  public getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('api/company/getcompanies');
  }
  public getCompanyProducts(id: number): Observable<Product[]> {
    debugger;
    return this.http.get<Product[]>(`api/product/getcompanyproducts/${id}`);
  }
}
