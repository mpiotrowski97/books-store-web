import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateUserModelRequest} from '../../core/models/api-request';
import {Observable} from 'rxjs';
import {CreateUserModelResponse, Pageable} from '../../core/models/api-response';
import {User} from '../../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  public fetchOne(id: string): Observable<User> {
    return this.http.get<User>(`users/${id}`);
  }

  public list(): Observable<Pageable<User>> {
    return this.http.get<Pageable<User>>('users');
  }

  public create(createModel: User): Observable<CreateUserModelResponse> {
    return this.http.post<CreateUserModelResponse>('users', createModel);
  }

  public delete(user: User): Observable<void> {
    return this.http.delete<void>(`users/${user.id}`);
  }

  public update(id: string, user: User): Observable<any> {
    return this.http.put(`users/${id}`, user);
  }
}
