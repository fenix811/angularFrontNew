import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
//import {Observable} from

import {AuthenticationService} from '../../core/services/authenticationService';
import * as actions from './appState.action';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
  })
  export class AppStateEffects {
    // @Effect()
    // Login$: Observable<any> = this.action$.pipe(
    //   ofType(actions.AppActionTypes.Login),
    //   map((action: actions.AppLogin) => action.payload),
    //   switchMap(payload => {
    //     return this.authService.login(payload.username, payload.password),
    //       map((user) => {
    //         console.log(user);
    //         return new actions.LoginSuccess({username: user.username, token: user.token});
    //       })
    //       catch((error) => {
    //         console.log(error);
    //         return Observable.of(new actions.LoginFailure({ error: error }));
    //       });
    //   }));


    @Effect()
    Login$ = this.action$.pipe(
      ofType(actions.AppActionTypes.Login),
      map((action: actions.AppLogin) => action.payload),
      switchMap(payload => {
        //debugger;

        return this.authService.login(payload.username, payload.password)
      })
    );


  constructor(private action$: Actions,
    private authService: AuthenticationService
    ) {

  }
//   @Effect({ dispatch: false })
// LogInSuccess: Observable<any> = this.action$.pipe(
//   ofType(actions.AppActionTypes.LoginSuccess),
//   tap((user) => {
//     localStorage.setItem('token', user.payload.token);
//     this.router.navigateByUrl('/');
//   })
// );

}
