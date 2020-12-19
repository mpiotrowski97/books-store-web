import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContextInitResponse} from '../models/api-response';
import {tap} from 'rxjs/operators';
import {AuthService} from '../../auth/services/auth.service';
import {CategoriesService} from './categories.service';
import {CartService} from '../../main/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private categoriesService: CategoriesService,
    private cartService: CartService
  ) { }

  public init(): Observable<ContextInitResponse> {
    return this.http.get<ContextInitResponse>('context/init')
      .pipe(
        tap(response => {
          this.authService.setLoggedUser(response.currentLoggedUser);
          this.categoriesService.pushCategories(response.categories);
        })
      );
  }
}
