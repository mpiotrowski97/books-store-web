import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../../core/models/book';
import {Pageable} from '../../../core/models/api-response';
import {finalize, map} from 'rxjs/operators';

@Component({
  selector: 'bs-books-carousel',
  templateUrl: './books-carousel.component.html',
  styleUrls: ['./books-carousel.component.scss']
})
export class BooksCarouselComponent implements OnInit {
  @Input()
  public title: string;

  @Input()
  public books$: Observable<Pageable<Book>>;

  public isLoading = true;

  public books: Book[];

  constructor() {
  }

  ngOnInit(): void {
    this.books$
      .pipe(
        map(response => response.content),
        finalize(() => this.isLoading = false)
      ).subscribe(books => this.books = books);
  }

}
