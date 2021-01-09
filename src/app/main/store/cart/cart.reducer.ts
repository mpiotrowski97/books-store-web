import {Action, createReducer, createSelector, on} from '@ngrx/store';
import {CartItem} from '../../../core/models/cart-item';
import {loadCartSuccessAction} from './cart.actions';

export interface CartState {
  items: CartItem[];
  value: number;
}

const initialState: CartState = {
  items: [],
  value: 0.0,
};

export function cartReducer(state: CartState | undefined, action: Action): CartState {
  return createReducer(
    initialState,
    on(loadCartSuccessAction, (currentState, {cartSummary}) => ({...state, items: cartSummary.items, value: cartSummary.value}))
  )(state, action);
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
