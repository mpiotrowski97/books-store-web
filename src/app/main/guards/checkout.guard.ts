import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import {isAuthenticatedSelector} from '../../auth/store/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class CheckoutGuard implements CanActivate {
  constructor(private store: Store) {
  }

  canActivate(): Observable<boolean> {
    return this.store.select(isAuthenticatedSelector);
  }
}
