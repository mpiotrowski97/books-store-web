import {createAction, props} from '@ngrx/store';
import {CartItem} from '../../core/models/cart-item';
import {CartSummaryResponse} from '../../core/models/api-response';

export enum CartActionsTypes {
  LOAD_CART = '[CART] Load Cart',
  LOAD_CART_SUCCESS = '[CART] Load Cart Success',
  LOAD_CART_FAILURE = '[CART] Load Cart Failure'
}

export const loadCartAction = createAction(
  CartActionsTypes.LOAD_CART
);

export const loadCartSuccessAction = createAction(
  CartActionsTypes.LOAD_CART_SUCCESS,
  props<CartSummaryResponse>()
);

export const loadCartFailureAction = createAction(
  CartActionsTypes.LOAD_CART_FAILURE
);

export const addCartItemAction = createAction(
  'ADD_CART_ITEM',
  props<{ newItem: CartItem }>()
);

export const removeCartItemAction = createAction(
  'REMOVE_CART_ITEM',
  props<{ removedItem: CartItem }>()
);
