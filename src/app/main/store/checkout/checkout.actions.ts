import {createAction, props} from '@ngrx/store';
import {CartItem} from '../../../core/models/cart-item';
import {Address} from '../../../core/models/address';
import {ShippingMethod} from '../../../core/models/shipping-method';
import {Order} from '../../../core/models/order';

export enum CheckoutActionsTypes {
  SET_ITEMS_ACTION_TYPE = '[MAIN] [CHECKOUT] Set items',
  SET_ADDRESS_ACTION_TYPE = '[MAIN] [CHECKOUT] Set address',
  SET_SHIPMENT_METHOD_ACTION_TYPE = '[MAIN] [CHECKOUT] Set shipment method',
  CLEAR_ORDER_ACTION_TYPE = '[MAIN] [CHECKOUT] Clear order',
  INCREASE_ORDER_VALUE_ACTION_TYPE = '[MAIN] [CHECKOUT] Increase order value',
  CREATE_ORDER_ACTION_TYPE = '[MAIN] [CHECKOUT] Create order',
  CREATE_ORDER_SUCCESS_ACTION_TYPE = '[MAIN] [CHECKOUT] Create order success'
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
  CheckoutActionsTypes.INCREASE_ORDER_VALUE_ACTION_TYPE,
  props<{ increase: number }>()
);

export const createOrderAction = createAction(
  CheckoutActionsTypes.CREATE_ORDER_ACTION_TYPE,
  props<{ order: Order }>()
);

export const createOrderSuccessAction = createAction(
  CheckoutActionsTypes.CREATE_ORDER_SUCCESS_ACTION_TYPE
);
