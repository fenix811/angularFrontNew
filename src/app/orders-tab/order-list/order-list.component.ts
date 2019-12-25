import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import {LoadOrders} from '../../state/ordersTabState/ordersTabState.action';
import { RootState } from '../../state/root-state';
import { getOrders, } from '../../state/ordersTabState/ordersTabState.selector';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders$;

  constructor(private store: Store<RootState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadOrders());

    this.orders$ = this.store.pipe(select(getOrders));

    }

}
