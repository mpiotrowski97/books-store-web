import {Action, createReducer, on} from '@ngrx/store';
import {CartItem} from '../../core/models/cart-item';
import {addCartItemAction, removeCartItemAction} from './cart.actions';

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
  on(addCartItemAction, (state, { newItem }) => ({...state, items: [...state.items, newItem]})),
  on(removeCartItemAction, (state, { removedItem }) => ({...state, items: state.items.filter(item => item !== removedItem)}))
);

export function reducer(state: CartState | undefined, action: Action): CartState {
  return cartReducer(state, action);
}
