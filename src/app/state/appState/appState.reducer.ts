import {
//    ActionReducer,
      ActionReducerMap,
      // createFeatureSelector,
      // createSelector,
      MetaReducer
    } from '@ngrx/store';
    import { environment } from '../../../environments/environment';
    import User from '../../interfaces/user';
    import {All} from '../root-actions';
    
    export interface AppState {
      user: User
    }
    // export const reducers: ActionReducerMap<AppState> = {
    // };
    
    
    // export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
    
    export const initialState: AppState = {
        user: null,
      };

      export function appReducer(state = initialState, action: All): AppState {
      switch (action.type) {
        default:
          return state;
      }
      }
