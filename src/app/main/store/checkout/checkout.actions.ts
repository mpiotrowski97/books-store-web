import {createAction, props} from '@ngrx/store';
import {CartItem} from '../../../core/models/cart-item';
import {Address} from '../../../core/models/address';
import {ShippingMethod} from '../../../core/models/shipping-method';

export enum CheckoutActionsTypes {
  SET_ITEMS_ACTION_TYPE = '[MAIN] [CHECKOUT] Set items',
  SET_ADDRESS_ACTION_TYPE = '[MAIN] [CHECKOUT] Set address',
  SET_SHIPMENT_METHOD_ACTION_TYPE = '[MAIN] [CHECKOUT] Set shipment method',
  CLEAR_ORDER_ACTION_TYPE = '[MAIN] [CHECKOUT] Clear order',
  INCREASE_ORDER_VALUE = '[MAIN] [CHECKOUT] Increase order value'
}

export const setItemsAction = createAction(
  CheckoutActionsTypes.SET_ITEMS_ACTION_TYPE,
  props<{ items: CartItem[] }>()
);

export const setAddressAction = createAction(
  CheckoutActionsTypes.SET_ADDRESS_ACTION_TYPE,
  props<{ address: Address }>()
);

export const setShipmentMethodAction = createAction(
  CheckoutActionsTypes.SET_SHIPMENT_METHOD_ACTION_TYPE,
  props<{ shipmentMethod: ShippingMethod }>()
);

export const clearOrder = createAction(
  CheckoutActionsTypes.CLEAR_ORDER_ACTION_TYPE,
);

export const increaseOrderValueAction = createAction(
  CheckoutActionsTypes.INCREASE_ORDER_VALUE,
  props<{ increase: number }>()
);
