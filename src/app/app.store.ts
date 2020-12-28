import {CartState, cartReducer} from './main/store/cart/cart.reducer';
import {coreReducer, CoreState} from './core/store/core.reducer';
import {mainReducer, MainState} from './main/store/main.reducer';
import {authReducer, AuthState} from './auth/store/auth.reducer';
import {notificationsReducer, NotificationsState} from './main/store/notifications/notifications.reducer';
import {checkoutReducer, CheckoutState} from './main/store/checkout/checkout.reducer';
import {CartEffects} from './main/store/cart/cart.effects';
import {MainEffects} from './main/store/main.effects';
import {AuthEffects} from './auth/store/auth.effects';
import {CheckoutEffects} from './main/store/checkout/checkout.effects';

export interface AppState {
  cart: CartState;
  core: CoreState;
  main: MainState;
  auth: AuthState;
  notifications: NotificationsState;
  checkout: CheckoutState;
}

export const appState = {
  cart: cartReducer,
  core: coreReducer,
  main: mainReducer,
  auth: authReducer,
  notifications: notificationsReducer,
  checkout: checkoutReducer
};

export const appEffects = [CartEffects, MainEffects, AuthEffects, CheckoutEffects];
