import {Action, createReducer, createSelector, on} from '@ngrx/store';
import {CartItem} from '../../../core/models/cart-item';
import {addCartItemAction, loadCartSuccessAction, removeCartItemAction} from './cart.actions';

export interface CartState {
  items: CartItem[];
  value: number;
}

const initialState: CartState = {
  items: [],
  value: 0.0,
};

const cartReducer = createReducer(
  initialState,
  on(addCartItemAction, (state, {newItem}) => ({...state, items: [...state.items, newItem]})),
  on(removeCartItemAction, (state, {removedItem}) => ({...state, items: state.items.filter(item => item !== removedItem)})),
  on(loadCartSuccessAction, (state, {cartSummary}) => ({...state, items: cartSummary.items, value: cartSummary.value}))
);

export function reducer(state: CartState | undefined, action: Action): CartState {
  return cartReducer(state, action);
}

const cartStateSelector = (state: { cart: CartState }) => state.cart;

export const cartValueSelector = createSelector(
  cartStateSelector,
  (state: CartState) => state.value
);

export const cartItemsSelector = createSelector(
  cartStateSelector,
  (state: CartState) => state.items
);
