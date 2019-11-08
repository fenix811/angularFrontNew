import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from  '@angular/forms';

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

    const l = 'qweUser';
    const p = 'qwePassword';

    this.store.dispatch(new AppLogin(this.loginForm.value));

  }

}
