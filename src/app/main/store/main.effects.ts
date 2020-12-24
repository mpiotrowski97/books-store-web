import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {mergeMap, switchMap} from 'rxjs/operators';
import {InitService} from '../../core/services/init.service';
import {setCategoriesAction} from '../../core/store/core.actions';
import {loadContextSuccessfulAction, MainActionsTypes} from './main.actions';
import {setLoggedUserAction} from '../../auth/store/auth.actions';
import {loadCartAction} from './cart/cart.actions';

@Injectable()
export class MainEffects {
  loadContext$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<Action>(MainActionsTypes.LOAD_CONTEXT),
    mergeMap(() => this.initService.init()
      .pipe(
        mergeMap(data => [
          setCategoriesAction({categories: data.categories}),
          setLoggedUserAction({loggedUser: data.currentLoggedUser}),
          ...!!data.currentLoggedUser ? [loadCartAction()] : [],
          loadContextSuccessfulAction()
        ])
      ))
    )
  );

  constructor(private actions$: Actions, private initService: InitService) {
  }
}
