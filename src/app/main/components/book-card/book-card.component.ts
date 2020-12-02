import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../core/models/book';

@Component({
  selector: 'bs-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input()
  public book: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
