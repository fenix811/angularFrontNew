import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './appState/appState.reducer';
import { AppStateEffects } from './appState/appState.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { metaReducers } from './appState/appState.reducer';
import { environment } from '../../environments/environment';
import {appStateModule} from './appState/appState.module';
import {companiesTabStateModule} from './companiesTabState/companiesTabState.module';

const features = [
  appStateModule,
  companiesTabStateModule,
]

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
