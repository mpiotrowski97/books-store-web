import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedUser: User;
  private authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private roles: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) {
  }

  public getLoggedUser(): User {
    return this.loggedUser;
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

  public isAuthenticated(): BehaviorSubject<boolean> {
    return this.authenticated;
  }

  public getRoles(): BehaviorSubject<string[]> {
    return this.roles;
  }

  public setLoggedUser(user: User): void {
    this.loggedUser = user;
    this.authenticated.next(!!user);
    this.roles.next(user?.roles);
  }


  public hasRole(role: string): boolean {
    if (!this.loggedUser?.roles) {
      return false;
    }

    return this.loggedUser.roles.includes(role);
  }
}
