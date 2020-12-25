import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {cartValueSelector} from '../../../main/store/cart/cart.reducer';

@Component({
  selector: 'bs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public cartValue$: Observable<number>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.cartValue$ = this.store.select(cartValueSelector);
  }

}
