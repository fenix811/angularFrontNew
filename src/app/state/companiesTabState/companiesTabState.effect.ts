import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



@Injectable({
    providedIn: 'root',
  })
  export class SubFeatureEffect {
    // @Effect()
    // myObservable$ = this.action$.pipe(
    //     ofType(null);
    // );



  constructor(private actions$: Actions) {

  }

}
