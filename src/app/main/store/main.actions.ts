import {createAction, props} from '@ngrx/store';

export enum MainActionsTypes {
  LOAD_CONTEXT = '[MAIN] Load context',
  LOAD_CONTEXT_SUCCESSFUL = '[MAIN] Load context successful',
  SET_ERROR = '[MAIN] Set error'
}

export const loadContextAction = createAction(
  MainActionsTypes.LOAD_CONTEXT
);

export const loadContextSuccessfulAction = createAction(
  MainActionsTypes.LOAD_CONTEXT_SUCCESSFUL
);

export const setErrorAction = createAction(
  MainActionsTypes.SET_ERROR,
  props<{isError: boolean}>()
);
