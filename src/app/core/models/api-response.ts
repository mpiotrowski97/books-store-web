import {User} from './user';
import {Category} from './category';

export interface ContextInitResponse {
  authUserModel: User;
  categories: Category[];
}

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
