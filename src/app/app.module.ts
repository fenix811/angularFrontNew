import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

// import { reducers, metaReducers } from './state/appState/appState.reducer';
// import { CompaniesTabEffect } from './state/appState/appState.effects';
// import { AppEffects } from './app.effects';
// import { reducers, metaReducers } from './reducers/index';
import {StateModule} from './state/state.module';
//import {LayoutModule} from './layout/layout.module';
import { ClientComponent } from './layout/client/client.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    FooterComponent,
    ClientComponent
  ],
  imports: [
//    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    StateModule,
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true
    //   }
    // }),
    // EffectsModule.forRoot([AppEffects]),
    //StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    // StoreModule.forRoot(reducers, {
    //   metaReducers, 
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true,
    //   }
    // }),
    //!environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
