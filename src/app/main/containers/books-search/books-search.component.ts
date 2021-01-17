import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../../services/books.service';
import {Subscription} from 'rxjs';
import {Book} from '../../../core/models/book';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'bs-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit, OnDestroy {

  public searchFor: string;

  private queryParamsSubscription: Subscription;

  public books: Book[];

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        tap(params => this.searchFor = params.get('search')),
      )
      .subscribe(params => this.fetchBooks(params.get('search')));
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  private fetchBooks(search: string): void {
    this.booksService.searchBooks(search)
      .subscribe(response => this.books = response.content);
  }

}
