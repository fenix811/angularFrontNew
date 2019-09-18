import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { companiesTabReducer } from './companiesTabState.reducer';
import { CompaniesTabStateEffects } from './companiesTabState.effect';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('companiesTab', companiesTabReducer),
    EffectsModule.forFeature([CompaniesTabStateEffects]),

    CommonModule
  ]
})
export class companiesTabStateModule { }
