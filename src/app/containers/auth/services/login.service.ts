import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.get('auth/login', {
      headers: {
        authorization: `Basic ${btoa(`${username}:${password}`)}`
      }
    });
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post('auth/register', {
      username, email, password
    });
  }
}
