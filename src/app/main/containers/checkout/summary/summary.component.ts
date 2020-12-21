import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {CartState} from '../../../store/cart/cart.reducer';
import {CartItem} from '../../../../core/models/cart-item';

@Component({
  selector: 'bs-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {
  private cartSubscription: Subscription;
  public items: CartItem[];

  constructor(private store: Store<{cart: CartState}>) {
  }

  ngOnInit(): void {
    this.cartSubscription = this.store.select('cart').subscribe(cartState => this.items = cartState.items);
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

}
