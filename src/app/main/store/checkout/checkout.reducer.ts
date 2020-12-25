import {Order} from '../../../core/models/order';
import {Action, createReducer, createSelector, on} from '@ngrx/store';
import {clearOrder, increaseOrderValueAction, setAddressAction, setItemsAction, setShipmentMethodAction} from './checkout.actions';

export interface CheckoutState {
  order: Order;
}

const initialState: CheckoutState = {
  order: {
    items: [],
    address: null,
    shipmentMethod: null,
    value: 0.0
  }
};

export const checkoutReducer = (state: CheckoutState | undefined, action: Action): CheckoutState => createReducer(
  initialState,
  on(setItemsAction, (currentState, {items}) => ({...currentState, order: {...currentState.order, items}})),
  on(setAddressAction, (currentState, {address}) => ({...currentState, order: {...currentState.order, address}})),
  on(setShipmentMethodAction, (currentState, {shipmentMethod}) => ({
    ...currentState, order: {...currentState.order, shipmentMethod}
  })),
  on(increaseOrderValueAction, (currentState, {increase}) => ({
    ...currentState,
    order: {...currentState.order, value: currentState.order.value + increase}
  })),
  on(clearOrder, (currentState) => ({...currentState, order: {items: [], address: null, shipmentMethod: null, value: 0.0}}))
)(state, action);

const checkoutStateSelector = (state: { checkout: CheckoutState }) => state.checkout;

export const orderSelector = createSelector(
  checkoutStateSelector,
  (state: CheckoutState) => state.order
);
