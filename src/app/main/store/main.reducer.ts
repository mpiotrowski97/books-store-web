import {Category} from '../../core/models/category';
import {Action, createReducer, createSelector, on} from '@ngrx/store';
import {setCategoriesAction} from '../../core/store/core.actions';
import {CoreState} from '../../core/store/core.reducer';
import {loadContextAction, loadContextSuccessfulAction} from './main.actions';

export interface MainState {
  ready: boolean;
}

const initialState: MainState = {
  ready: false
};

export function mainReducer(state: MainState | undefined, action: Action): MainState {
  return createReducer(
    initialState,
    on(loadContextAction, (currentState) => ({...currentState, ready: false})),
    on(loadContextSuccessfulAction, (currentState) => ({...currentState, ready: true}))
  )(state, action);
}

export const readySelector = createSelector(
  (state: { main: MainState }) => state.main,
  (state: MainState) => state.ready
);
