import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './appState.reducer';

export const getAppState = createFeatureSelector<AppState>('app');
// export const getLoggedUser = createSelector(
//   getAppState,
//   (state) => state ? state.user : {},
// );

