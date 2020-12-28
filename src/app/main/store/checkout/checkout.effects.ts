import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CheckoutActionsTypes, createOrderAction, createOrderSuccessAction} from './checkout.actions';
import {map, switchMap} from 'rxjs/operators';
import {CheckoutService} from '../../services/checkout.service';

@Injectable()
export class CheckoutEffects {
  createOrder$ = createEffect(() => this.actions$.pipe(
    ofType<ReturnType<typeof createOrderAction>>(CheckoutActionsTypes.CREATE_ORDER_ACTION_TYPE),
    switchMap((payload) => this.checkoutService.createOrder(payload.order)
      .pipe(
        map(() => createOrderSuccessAction())
      ))
  ));

  constructor(private actions$: Actions, private checkoutService: CheckoutService) {
  }
}
