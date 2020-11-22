import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
  }

  logout(): void {
    this.http.post('logout', {})
      .subscribe(() => {
        this.authService.setLoggedUser(null);
        this.router.navigate(['/']);
      });
  }
}
