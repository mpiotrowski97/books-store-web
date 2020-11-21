import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) {
  }

  logout(): void {
    this.http.post('logout', {})
      .subscribe();
  }
}
