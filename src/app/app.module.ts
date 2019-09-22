import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import {StateModule} from './state/state.module';
import { ClientComponent } from './layout/client/client.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './login/login.component';

import {CompaniesTabModule} from './companies-tab/companies-tab.module'
import { AuthenticationService } from './services/authenticationService';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { ApiService } from './services/apiService';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    FooterComponent,
    ClientComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StateModule,
    ReactiveFormsModule,
    CompaniesTabModule,   //for now load NOT lazy
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
