import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import {LoadOrders} from '../../state/ordersTabState/ordersTabState.action';
import { RootState } from '../../state/root-state';
import { getOrders, } from '../../state/ordersTabState/ordersTabState.selector';
import { ApiService } from '../../core/services/apiService';
import { map, switchMap, tap} from 'rxjs/operators';
import { forkJoin, combineLatest } from 'rxjs';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders$;

  constructor(private store: Store<RootState>,
              private apiService: ApiService) { }

  ngOnInit() {
     this.store.dispatch(new LoadOrders());

    // this.orders$ = this.store.pipe(select(getOrders));
//    this.implementation1();
//    this.implementation0();

    }

    // implementation0() {
    //   forkJoin(this.apiService.getOrders(), this.apiService.getBonusDates())
    //   .switchMap(r =>
    //     console.log
    //     )
    //   .subscribe(v => {
    //     console.log(v);
    //     debugger;
    // }
    // )}

}
