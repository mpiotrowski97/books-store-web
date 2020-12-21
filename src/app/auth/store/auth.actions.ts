import {createAction, props} from '@ngrx/store';
import {User} from '../../core/models/user';

export enum AuthActionsTypes {
  SET_LOGGED_USER = '[AUTH] Set logged user action',
  SET_ROLES = '[AUTH] Set roles'
}

export const setLoggedUserAction = createAction(
  AuthActionsTypes.SET_LOGGED_USER,
  props<{ loggedUser: User }>()
);

export const setRoles = createAction(
  AuthActionsTypes.SET_ROLES,
  props<{ roles: string[] }>()
);
