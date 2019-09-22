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

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private store: Store<RootState>) {}

  ngOnInit() {
  //   this.loginForm  =  this.formBuilder.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required]
  // });
  }
  
  login() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.getRawValue());
    debugger;
    
    const l = 'qweUser';
    const p = 'qwePassword';

    debugger;
    this.store.dispatch(new AppLogin(this.loginForm.value));
    
//    this.store.dispatch(new AppLogin({username: l, password: p}));

    

  }

}
