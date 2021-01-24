import {Component, OnInit} from '@angular/core';
import {Book} from '../../../../core/models/book';

@Component({
  selector: 'bs-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.scss']
})
export class BooksCreateComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  handleFormSubmit(book: Book): void {

  }
}
