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

  public getSummary(): Observable<CartSummaryResponse> {
    return this.http.get<CartSummaryResponse>('cart/summary');
  }

  public addToCart(bookIsbn: string): Observable<any> {
    return this.http.post('cart/add', {bookIsbn});
  }

  public clearCart(): Observable<void> {
    return this.http.delete<void>('cart/clear');
  }

  public removeCartItem(id: string): Observable<void> {
    return this.http.delete<void>(`cart/${id}`);
  }

  public changeQuantity(id: string, quantity: number): Observable<void> {
    return this.http.put<void>(`cart/${id}/change-quantity`, {
      quantity
    });
  }
}
