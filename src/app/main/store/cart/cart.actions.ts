import {createAction, props} from '@ngrx/store';
import {CartItem} from '../../../core/models/cart-item';
import {CartSummaryResponse} from '../../../core/models/api-response';

export enum CartActionsTypes {
  LOAD_CART = '[CART] Load Cart',
  LOAD_CART_SUCCESS = '[CART] Load Cart Success',
  ADD_CART_ITEM = '[CART] Add Cart Item',
  REMOVE_CART_ITEM = '[CART] Remove Cart Item',
  CLEAR_CART = '[CART] Clear cart',
  CHANGE_CART_ITEM_QUANTITY = '[CART] Change cart item quantity'
}

export const loadCartAction = createAction(
  CartActionsTypes.LOAD_CART
);

export const loadCartSuccessAction = createAction(
  CartActionsTypes.LOAD_CART_SUCCESS,
  props<{ cartSummary: CartSummaryResponse }>()
);

export const addCartItemAction = createAction(
  CartActionsTypes.ADD_CART_ITEM,
  props<{ newItem: CartItem }>()
);

export const removeCartItemAction = createAction(
  CartActionsTypes.REMOVE_CART_ITEM,
  props<{ removedItem: CartItem }>()
);

export const clearCartAction = createAction(
  CartActionsTypes.CLEAR_CART
);

export const changeCartItemQuantity = createAction(
  CartActionsTypes.CHANGE_CART_ITEM_QUANTITY,
  props<{ cartItem: CartItem, quantity: number }>()
);
