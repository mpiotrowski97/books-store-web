import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {CartItem} from '../../../../core/models/cart-item';
import {Store} from '@ngrx/store';
import {cartItemsSelector, CartState, cartValueSelector} from '../../../store/cart/cart.reducer';
import {Observable} from 'rxjs';
import {changeCartItemQuantity, clearCartAction, removeCartItemAction} from '../../../store/cart/cart.actions';
import {clearOrder, increaseOrderValueAction, setItemsAction} from '../../../store/checkout/checkout.actions';
import {Router} from '@angular/router';
import {addSuccessNotificationAction} from '../../../store/notifications/notifications.actions';

@Component({
  selector: 'bs-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public isLoading = true;
  public items$: Observable<CartItem[]>;
  public value$: Observable<number>;

  constructor(
    private cartService: CartService,
    private store: Store<{ cart: CartState }>,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.items$ = this.store.select(cartItemsSelector);
    this.store.dispatch(clearOrder());
    this.value$ = this.store.select(cartValueSelector);

    this.getSummary();
  }

  public getSummary(): void {
    this.isLoading = true;
  }

  handleRemoveItemClick(cartItem: CartItem): void {
    this.store.dispatch(removeCartItemAction({removedItem: cartItem}));
  }

  handleShippingClick(items: CartItem[], value: number): void {
    this.store.dispatch(setItemsAction({items}));
    this.store.dispatch(increaseOrderValueAction({increase: value}));
    this.router.navigate(['/', 'checkout', 'shipping']);
  }

  handleClearCartClick(): void {
    this.store.dispatch(clearCartAction());
  }

  handleQuantityChange(cartItem: CartItem, $event: any): void {
    const quantity = $event.target.value;

    if (100 < quantity) {
      addSuccessNotificationAction({content: `Cannot change quantity. Max items quantity is 100`});
      return;
    }

    if (0 >= quantity) {
      this.store.dispatch(removeCartItemAction({removedItem: cartItem}));
      return;
    }

    this.store.dispatch(changeCartItemQuantity({cartItem, quantity: +$event.target.value}));
  }
}
