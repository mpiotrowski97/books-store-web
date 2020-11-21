import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginModelResponse} from '../models/api-response';
import {tap} from 'rxjs/operators';
import {AuthService} from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  public init(): Observable<LoginModelResponse> {
    return this.http.get<LoginModelResponse>('auth/login')
      .pipe(
        tap(response => this.authService.setLoggedUser(response.user))
      );
  }
}
