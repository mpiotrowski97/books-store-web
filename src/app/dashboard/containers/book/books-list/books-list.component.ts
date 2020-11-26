import { Component, OnInit } from '@angular/core';
import {Pageable} from '../../../../core/models/api-response';
import {Book} from '../../../../core/models/book';
import {BooksService} from '../../../services/books.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'bs-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  public isLoading = true;
  public books: Book[] = [];
  public pageable: Pageable<Book>;

  constructor(private booksService: BooksService) { }

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

}
