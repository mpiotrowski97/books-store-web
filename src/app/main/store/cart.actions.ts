import {createAction, props} from '@ngrx/store';
import {CartItem} from '../../core/models/cart-item';

export const addCartItemAction = createAction(
  'ADD_CART_ITEM',
  props<{ newItem: CartItem }>()
);

export const removeCartItemAction = createAction(
  'REMOVE_CART_ITEM',
  props<{ removedItem: CartItem }>()
);
