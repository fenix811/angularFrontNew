import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {StateModule} from './state/state.module';

import {CompaniesTabModule} from './companies-tab/companies-tab.module'
import { AuthenticationService } from './core/services/authenticationService';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/services/token.interceptor';
import { ApiService } from './core/services/apiService';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './core/login/login.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';

import { AppMaterialModule } from './layout/app.material.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientLayoutComponent,
  ],
  imports: [
    AppMaterialModule,

    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StateModule,
    ReactiveFormsModule,
    CompaniesTabModule,   //for now load NOT lazy
    LayoutModule,

  ],
  providers: [AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    ApiService,  //TODO move to its module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
