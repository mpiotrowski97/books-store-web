import {User} from './user';

export interface LoginModelResponse {
  user: User;
}

export interface Pageable<T> {
  content: T[];
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

// tslint:disable-next-line:no-empty-interface
export interface CreateUserModelResponse extends User {
}
