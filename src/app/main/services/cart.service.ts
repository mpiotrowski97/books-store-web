import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CartSummaryResponse} from '../../core/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  public getSummary(): Observable<CartSummaryResponse> {
    return this.http.get<CartSummaryResponse>('cart/summary');
  }
}
