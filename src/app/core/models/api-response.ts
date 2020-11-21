import {User} from './user';

export interface LoginModelResponse {
  user: User;
}

// tslint:disable-next-line:no-empty-interface
export interface CreateUserModelResponse extends User {
}
