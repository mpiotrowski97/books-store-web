import {User} from '../../core/models/user';
import {Action, createReducer, on} from '@ngrx/store';
import {setLoggedUserAction, setRoles} from './auth.actions';

export interface AuthState {
  loggedUser: User;
  roles: string[];
}

const initialState: AuthState = {
  loggedUser: null,
  roles: []
};

export const authReducer = (state: AuthState | undefined, action: Action) => {
  return createReducer(
    initialState,
    on(setLoggedUserAction, (currentState: AuthState, {loggedUser}) => ({...currentState, loggedUser})),
    on(setRoles, (currentState: AuthState, {roles}) => ({...state, roles}))
  )(state, action);
};
