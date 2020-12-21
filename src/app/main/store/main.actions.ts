import {createAction} from '@ngrx/store';

export enum MainActionsTypes {
  LOAD_CONTEXT = '[MAIN] Load context',
  LOAD_CONTEXT_SUCCESSFUL = '[MAIN] Load context successful'
}

export const loadContextAction = createAction(
  MainActionsTypes.LOAD_CONTEXT
);

export const loadContextSuccessfulAction = createAction(
  MainActionsTypes.LOAD_CONTEXT_SUCCESSFUL
);
