import {Action, createReducer, createSelector, on} from '@ngrx/store';
import {loadContextAction, loadContextSuccessfulAction, setErrorAction} from './main.actions';

export interface MainState {
  ready: boolean;
  error: boolean;
}

const initialState: MainState = {
  ready: false,
  error: false
};

export function mainReducer(state: MainState | undefined, action: Action): MainState {
  return createReducer(
    initialState,
    on(loadContextAction, (currentState) => ({...currentState, ready: false})),
    on(loadContextSuccessfulAction, (currentState) => ({...currentState, ready: true})),
    on(setErrorAction, (currentState, {isError}) => ({...currentState, error: isError}))
  )(state, action);
}

const mainStateSelector = (state: { main: MainState }) => state.main;

export const readySelector = createSelector(
  mainStateSelector,
  (state: MainState) => state.ready
);

export const isErrorSelector = createSelector(
  mainStateSelector,
  (state: MainState) => state.error
);
