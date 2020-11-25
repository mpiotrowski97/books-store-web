import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../../core/models/book';

@Component({
  selector: 'bs-books-carousel',
  templateUrl: './books-carousel.component.html',
  styleUrls: ['./books-carousel.component.scss']
})
export class BooksCarouselComponent implements OnInit {
  @Input()
  public title: string;

  @Input()
  public books$: Observable<Book[]>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
