import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateUserModelRequest} from '../../core/models/api-request';
import {Observable} from 'rxjs';
import {CreateUserModelResponse} from '../../core/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  public create(createModel: CreateUserModelRequest): Observable<CreateUserModelResponse> {
    return this.http.post<CreateUserModelResponse>('users', createModel);
  }
}
