import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  constructor(private http: HttpClient) { }

  public init(): Observable<any> {
    return this.http.get('auth/login');
  }
}
