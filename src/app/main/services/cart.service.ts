import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {CartSummaryResponse} from '../../core/models/api-response';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {
  }

  public getSummary(): void {
    this
      .http
      .get<CartSummaryResponse>('cart/summary');
  }
}
