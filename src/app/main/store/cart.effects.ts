import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CartService} from '../services/cart.service';
import {map, mapTo, mergeMap} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CartActionsTypes, loadCartSuccessAction} from './cart.actions';

@Injectable()
export class CartEffects {

  loadCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<Action>(CartActionsTypes.LOAD_CART),
    mergeMap(() => this.cartService.getSummary()
      .pipe(
        map(data => loadCartSuccessAction(data))
      ))
    )
  );

  constructor(private actions$: Actions, private cartService: CartService) {
  }
}
