import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppStateEffects } from './appState/appState.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { metaReducers } from './root-state';
import { environment } from '../../environments/environment';
import {appStateModule} from './appState/appState.module';
import {CompaniesTabStateModule} from './companiesTabState/companiesTabState.module';
import { OrdersTabStateModule } from './ordersTabState/ordersTabState.module';

const features = [
  appStateModule,
  CompaniesTabStateModule,
  OrdersTabStateModule,
];

@NgModule({
  imports: [
    ...features,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    HttpClientModule,
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 100 })
      : [],
],
})

export class StateModule {}
