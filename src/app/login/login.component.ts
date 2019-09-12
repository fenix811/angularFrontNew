import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';

// import { AuthService } from  '../auth.service';
import { Store, State } from '@ngrx/store';
import { RootState } from '../state/root-state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  userLogin = new FormControl(null);
  userPassword = new FormControl(null);

  constructor(private store: Store<RootState>) {}

  ngOnInit() {
  }
  
  login() {
    const l = this.userLogin;
    const p = this.userPassword;

//    this.store.dispatch(new )

    

  }

}
