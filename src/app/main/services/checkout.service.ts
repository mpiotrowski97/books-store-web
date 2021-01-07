import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../../core/models/order';
import {CreateOrderResponse} from '../../core/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(private http: HttpClient) { }

  public createOrder(order: Order): Observable<CreateOrderResponse> {
    return this.http.post<CreateOrderResponse>('orders', order);
  }
}
