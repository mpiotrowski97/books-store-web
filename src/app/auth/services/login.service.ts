import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginModelResponse} from '../../core/models/api-response';
import {AuthService} from './auth.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  login(username: string, password: string): Observable<LoginModelResponse> {
    return this.http.get<LoginModelResponse>('auth/login', {
      headers: {
        authorization: `Basic ${btoa(`${username}:${password}`)}`
      }
    })
      .pipe(
        tap((response) => {
          this.authService.setLoggedUser(response.user);
        })
      );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post('auth/register', {
      username, email, password
    });
  }
}
