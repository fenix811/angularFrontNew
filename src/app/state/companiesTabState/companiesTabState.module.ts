import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { subFeatureReducer } from './companiesTabState.reducer';
import { SubFeatureEffect } from './companiesTabState.effect';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('companiesTabState', subFeatureReducer),
    EffectsModule.forFeature([SubFeatureEffect]),

    CommonModule
  ]
})
export class companiesTabStateModule { }
