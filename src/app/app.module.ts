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
    CompaniesTabModule,   //for now load NOT lazy
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
