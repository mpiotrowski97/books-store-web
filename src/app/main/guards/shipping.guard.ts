import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import {orderSelector} from '../store/checkout/checkout.reducer';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShippingGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(orderSelector)
      .pipe(
        map(order => !!order.items?.length ? true : this.router.createUrlTree(['/', 'checkout', 'cart']))
      );
  }
}
