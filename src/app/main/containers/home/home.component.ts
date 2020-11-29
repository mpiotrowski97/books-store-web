import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../services/books.service';
import {Observable} from 'rxjs';
import {Pageable} from '../../../core/models/api-response';
import {Book} from '../../../core/models/book';

@Component({
  selector: 'bs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public firstSectionBooksObservable: Observable<Pageable<Book>>;
  public secondSectionBooksObservable: Observable<Pageable<Book>>;
  public thirdSectionBooksObservable: Observable<Pageable<Book>>;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.firstSectionBooksObservable = this.booksService.getBooks('adventure');
    this.secondSectionBooksObservable = this.booksService.getBooks('contemporary');
    this.thirdSectionBooksObservable = this.booksService.getBooks('fantasy');
  }

}
