import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CartService} from '../../services/cart.service';
import {map, mergeMap, switchMap} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {
  addCartItemAction,
  CartActionsTypes, changeCartItemQuantity,
  clearCartAction,
  loadCartAction,
  loadCartSuccessAction,
  removeCartItemAction
} from './cart.actions';
import {addSuccessNotificationAction} from '../notifications/notifications.actions';

@Injectable()
export class CartEffects {

  loadCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<Action>(CartActionsTypes.LOAD_CART),
    switchMap(() => this.cartService.getSummary()
      .pipe(
        map(data => loadCartSuccessAction({cartSummary: data}))
      ))
    )
  );

  addToCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<ReturnType<typeof addCartItemAction>>(CartActionsTypes.ADD_CART_ITEM),
    switchMap(payload => this.cartService.addToCart(payload.newItem.id)
      .pipe(
        mergeMap(() => [
          loadCartAction(), addSuccessNotificationAction({content: `${payload.newItem.bookTitle} has been added to the cart!`})
        ])
      ))
  ));

  clearCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<ReturnType<typeof clearCartAction>>(CartActionsTypes.CLEAR_CART),
    switchMap(() => this.cartService.clearCart()
      .pipe(
        mergeMap(() => [
          loadCartAction(), addSuccessNotificationAction({content: `The cart has been cleared.`})
        ])
      ))
  ));

  removeCartItem$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<ReturnType<typeof removeCartItemAction>>(CartActionsTypes.REMOVE_CART_ITEM),
    switchMap(payload => this.cartService.removeCartItem(payload.removedItem.id)
      .pipe(
        mergeMap(() => [
          loadCartAction(), addSuccessNotificationAction({content: `${payload.removedItem.bookTitle} has been removed.`})
        ])
      ))
  ));

  changeCartItemQuantity$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<ReturnType<typeof changeCartItemQuantity>>(CartActionsTypes.CHANGE_CART_ITEM_QUANTITY),
    switchMap(payload => this.cartService.changeQuantity(payload.cartItem.id, payload.quantity)
      .pipe(
        mergeMap(() => [
          loadCartAction(), addSuccessNotificationAction({content: `${payload.cartItem.bookTitle} quantity has been changed.`})
        ])
      ))
  ));

  constructor(private actions$: Actions, private cartService: CartService) {
  }
}
