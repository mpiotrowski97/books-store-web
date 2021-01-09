import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../core/models/book';
import {CartService} from '../../../dashboard/services/cart.service';
import {finalize} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {CartState} from '../../store/cart/cart.reducer';
import {Observable} from 'rxjs';
import {addCartItemAction} from '../../store/cart/cart.actions';
import {addSuccessNotificationAction} from '../../store/notifications/notifications.actions';

@Component({
  selector: 'bs-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input()
  public book: Book;

  public isProcessing = false;

  cart: Observable<CartState>;

  constructor(
    private cartService: CartService,
    private store: Store<{ cart: CartState }>
  ) {
  }

  ngOnInit(): void {
  }

  handleAddToCartClick(): void {
    this.store.dispatch(addCartItemAction({
      newItem: {
        id: this.book.isbn,
        bookTitle: this.book.title,
        bookPrice: +this.book.price,
        quantity: 1,
        value: +this.book.price
      }
    }));
  }
}
