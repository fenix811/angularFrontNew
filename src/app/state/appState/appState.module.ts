import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './appState.reducer';
import { AppStateEffects } from './appState.effects';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('app', reducers),
    EffectsModule.forFeature([AppStateEffects]),

    CommonModule
  ]
})
export class appStateModule { }
