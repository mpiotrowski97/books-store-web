import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Order} from '../../../../core/models/order';
import {orderSelector} from '../../../store/checkout/checkout.reducer';
import {User} from '../../../../core/models/user';
import {loggedUserSelector} from '../../../../auth/store/auth.reducer';
import {take} from 'rxjs/operators';
import {cartValueSelector} from '../../../store/cart/cart.reducer';

@Component({
  selector: 'bs-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  public termsAccepted = false;
  public order$: Observable<Order>;
  public value$: Observable<number>;
  public loggedUser: User;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.order$ = this.store.select(orderSelector);
    this.value$ = this.store.select(cartValueSelector);
    this.store.select(loggedUserSelector)
      .pipe(take(1))
      .subscribe(user => this.loggedUser = user);
  }

  handleOrderClick(): void {

  }
}
