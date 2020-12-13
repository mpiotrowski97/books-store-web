import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {CartItem} from '../../../../core/models/cart-item';
import {Store} from '@ngrx/store';
import {CartState} from '../../../store/cart.reducer';
import {Observable} from 'rxjs';
import {removeCartItemAction} from '../../../store/cart.actions';

@Component({
  selector: 'bs-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public isLoading = true;
  public items: CartItem[] = [];
  public value: number;
  public cart$: Observable<CartState>;

  constructor(
    private cartService: CartService,
    private store: Store<{cart: CartState}>
  ) {
  }

  ngOnInit(): void {
    this.cart$ = this.store.select('cart');
    this.getSummary();
  }

  public getSummary(): void {
    this.isLoading = true;
  }

  handleRemoveItemClick(cartItem: CartItem): void {
    this.store.dispatch(removeCartItemAction({removedItem: cartItem}));
  }
}
