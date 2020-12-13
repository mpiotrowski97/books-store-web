import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {CartSummaryResponse} from '../../core/models/api-response';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartSubject = new BehaviorSubject<CartSummaryResponse>(null);
  public isCartLoadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  public getSummary(): void {
    this.isCartLoadingSubject.next(true);

    this
      .http
      .get<CartSummaryResponse>('cart/summary')
      .pipe(
        finalize(() => this.isCartLoadingSubject.next(false))
      )
      .subscribe(response => this.cartSubject.next(response));
  }

  public getCartSubject(): BehaviorSubject<CartSummaryResponse> {
    return this.cartSubject;
  }

  public getIsCartLoadingSubject(): BehaviorSubject<boolean> {
    return this.isCartLoadingSubject;
  }
}
