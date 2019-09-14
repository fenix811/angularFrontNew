import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';

import User  from '../interfaces/user';
// import { AuthService } from  '../auth.service';
import { Store, State } from '@ngrx/store';
import { RootState } from '../state/root-state';

import { AppLogin } from '../state/appState/appState.action' 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User(); 

  userLogin = new FormControl(null);
  userPassword = new FormControl(null);

  constructor(private store: Store<RootState>) {}

  ngOnInit() {
  }
  
  login() {
    // const l = this.userLogin; //TODO use observer
    // const p = this.userPassword;
    const l = 'qweUser';
    const p = 'qwePassword';

    this.store.dispatch(new AppLogin({username: l, password: p}));

    

  }

}
