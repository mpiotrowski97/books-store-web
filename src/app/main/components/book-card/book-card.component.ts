import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../core/models/book';
import {CartService} from '../../../dashboard/services/cart.service';
import {finalize} from 'rxjs/operators';
import {NotificationsService} from '../../../core/services/notifications.service';

@Component({
  selector: 'bs-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input()
  public book: Book;

  public isProcessing = false;

  constructor(
    private cartService: CartService,
    private notificationsService: NotificationsService
  ) {
  }

  ngOnInit(): void {
  }

  handleAddToCartClick(): void {
    this.isProcessing = true;

    this.cartService
      .addToCart(this.book.isbn)
      .pipe(
        finalize(() => this.isProcessing = false)
      )
      .subscribe(
        () => this.notificationsService.addSuccessNotification(`${this.book.title} has been added to the cart!`)
      );
  }
}
