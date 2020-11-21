import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../containers/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  logout(): void {
    this.http.post('logout', {})
      .subscribe(() => this.authService.setLoggedUser(null));
  }
}
