import {Component, OnInit} from '@angular/core';
import {Pageable} from '../../../../core/models/api-response';
import {Book} from '../../../../core/models/book';
import {BooksService} from '../../../services/books.service';
import {finalize} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {addSuccessNotificationAction} from '../../../../main/store/notifications/notifications.actions';

@Component({
  selector: 'bs-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  public isLoading = true;
  public books: Book[] = [];
  public pageable: Pageable<Book>;

  constructor(private booksService: BooksService, private store: Store) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.isLoading = true;

    this.booksService
      .getBooks()
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(response => {
        this.books = response.content;
        this.pageable = response;
      });
  }

  handleBookDeleteClick(book: Book): void {
    if (!confirm('Are you sure?')) {
      return;
    }

    this.booksService.deleteBook(book)
      .pipe(
        finalize(() => this.getList())
      )
      .subscribe(() => this.store.dispatch(addSuccessNotificationAction({content: `${book.title} has been removed`})));
  }
}
