import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../core/models/book';
import {CartService} from '../../../dashboard/services/cart.service';
import {Store} from '@ngrx/store';
import {CartState} from '../../store/cart/cart.reducer';
import {Observable} from 'rxjs';
import {addCartItemAction} from '../../store/cart/cart.actions';

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

  public images: string[] = [
    'https://www.swiatksiazki.pl/media/catalog/product/cache/8700249466b3ee6242cfa222c30c22e2/3/4/3499906703934.jpg',
    'https://www.swiatksiazki.pl/media/catalog/product/cache/d91ed0412f8a502f4d50e5381dd20aed/8/4/8499906706684.jpg',
    'https://www.swiatksiazki.pl/media/catalog/product/cache/d91ed0412f8a502f4d50e5381dd20aed/2/2/2299906707822.jpg',
    'https://www.swiatksiazki.pl/media/catalog/product/cache/d91ed0412f8a502f4d50e5381dd20aed/4/6/4699906715646.jpg',
    'https://www.swiatksiazki.pl/media/catalog/product/cache/d91ed0412f8a502f4d50e5381dd20aed/1/8/1899906686118.jpg',
    'https://www.swiatksiazki.pl/media/catalog/product/cache/d91ed0412f8a502f4d50e5381dd20aed/1/2/1299906698512.jpg',
    'https://www.swiatksiazki.pl/media/catalog/product/cache/d91ed0412f8a502f4d50e5381dd20aed/9/4/9499906719494-3.jpg',
    'https://www.swiatksiazki.pl/media/catalog/product/cache/d91ed0412f8a502f4d50e5381dd20aed/7/x/7x99906709170.jpg',
    'https://www.swiatksiazki.pl/media/catalog/product/cache/d91ed0412f8a502f4d50e5381dd20aed/x/4/x499906718404.jpg',
    'https://www.swiatksiazki.pl/media/catalog/product/cache/d91ed0412f8a502f4d50e5381dd20aed/9/1/9199906715291.jpg',
    'https://www.swiatksiazki.pl/media/catalog/product/cache/d91ed0412f8a502f4d50e5381dd20aed/8/3/8399906717083.jpg',
    'https://www.swiatksiazki.pl/media/catalog/product/cache/d91ed0412f8a502f4d50e5381dd20aed/8/1/8199906717081.jpg',
    'https://www.swiatksiazki.pl/media/catalog/product/cache/d91ed0412f8a502f4d50e5381dd20aed/1/9/1999906720519.jpg'
  ];

  public image: string;

  constructor(
    private cartService: CartService,
    private store: Store<{ cart: CartState }>
  ) {
  }

  ngOnInit(): void {
    this.image = this.images[Math.floor(Math.random() * (this.images.length))];
  }

  handleAddToCartClick(): void {
    this.store.dispatch(addCartItemAction({
      newItem: {
        id: this.book.isbn,
        bookTitle: this.book.title,
        bookPrice: +this.book.price,
        bookIsbn: this.book.isbn,
        quantity: 1,
        value: +this.book.price
      }
    }));
  }
}
