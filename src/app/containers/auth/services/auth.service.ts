import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedUser: User;

  constructor(private http: HttpClient) {
  }

  public verifyUser(token: string): Observable<any> {
    return this.http.post('auth/user-verification', {
      code: token
    });
  }

  public passwordRecovery(email: string): Observable<any> {
    return this.http.post('auth/forbidden-password', {
      email
    });
  }

  public resetPassword(code: string, password: string): Observable<any> {
    return this.http.post('auth/reset-password', {
      code, password
    });
  }

  public isAuthenticated(): boolean {
    return !!this.loggedUser;
  }

  public setLoggedUser(user: User): void {
    this.loggedUser = user;
  }
}
