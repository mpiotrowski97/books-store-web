import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {CartItem} from '../../../../core/models/cart-item';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'bs-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public isLoading = true;
  public items: CartItem[] = [];
  public value: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.getSummary();
  }

  public getSummary(): void {
    this.isLoading = true;

    this.cartService
      .getSummary()
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(response => {
        this.items = response.items;
        this.value = response.value;
      });
  }
}
