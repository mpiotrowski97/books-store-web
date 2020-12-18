import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {CartItem} from '../../../../core/models/cart-item';
import {Store} from '@ngrx/store';
import {CartState} from '../../../store/cart.reducer';
import { Subscription} from 'rxjs';
import {removeCartItemAction} from '../../../store/cart.actions';

@Component({
  selector: 'bs-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  public isLoading = true;
  public items: CartItem[] = [];
  public value: number;
  public cartSubscription: Subscription;

  constructor(
    private cartService: CartService,
    private store: Store<{cart: CartState}>
  ) {
  }

  ngOnInit(): void {
    this.cartSubscription = this.store.select('cart').subscribe(cartState => {
      this.items = cartState.items;
      this.value = cartState.value;
    });

    this.getSummary();
  }

  public getSummary(): void {
    this.isLoading = true;
  }

  handleRemoveItemClick(cartItem: CartItem): void {
    this.store.dispatch(removeCartItemAction({removedItem: cartItem}));
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
